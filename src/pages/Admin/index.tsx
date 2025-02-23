import { Button, Form, Input, Modal, Select, Table, Tabs, message } from 'antd';
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Container from '../../common/Container';
import { db } from '../../config/firebase';
import { News } from '../../types/news';
import { downloadCSV } from '../../utils/csvExport';

const { TabPane } = Tabs;
const { Option } = Select;

const AdminContainer = styled(Container)`
  padding-top: 100px;
  min-height: calc(100vh - 100px);
`;

const TableContainer = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

interface Registration {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  district: string;
  institution: string;
  timestamp: string;
  [key: string]: any;
}

interface Contact {
  id: string;
  name: string;
  contactNumber: string;
  timestamp: string;
  [key: string]: any;
}

const Admin = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeKey, setActiveKey] = useState("1");
  const [newsModalVisible, setNewsModalVisible] = useState(false);
  const [newsForm] = Form.useForm();
  const [news, setNews] = useState<News[]>([]);

  const fetchData = async () => {
    try {
      // Fetch registrations
      const registrationsQuery = query(
        collection(db, 'registrations'),
        orderBy('timestamp', 'desc')
      );
      const registrationsSnapshot = await getDocs(registrationsQuery);
      const registrationsData = registrationsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate().toLocaleString() || 'N/A'
      })) as Registration[];

      // Fetch contacts
      const contactsQuery = query(
        collection(db, 'contacts'),
        orderBy('timestamp', 'desc')
      );
      const contactsSnapshot = await getDocs(contactsQuery);
      const contactsData = contactsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate().toLocaleString() || 'N/A'
      })) as Contact[];

      setRegistrations(registrationsData);
      setContacts(contactsData);
    } catch (error) {
      message.error('Failed to fetch data');
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNews = async () => {
    try {
      const newsQuery = query(
        collection(db, 'news'),
        orderBy('timestamp', 'desc')
      );
      const snapshot = await getDocs(newsQuery);
      const newsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        timestamp: doc.data().timestamp?.toDate().toLocaleString() || 'N/A'
      })) as News[];
      setNews(newsData);
    } catch (error) {
      console.error('Error fetching news:', error);
      message.error('Failed to fetch news');
    }
  };

  const handleAddNews = async (values: any) => {
    try {
      await addDoc(collection(db, 'news'), {
        ...values,
        timestamp: serverTimestamp()
      });

      message.success('News added successfully');
      setNewsModalVisible(false);
      newsForm.resetFields();
      fetchNews();
    } catch (error) {
      console.error('Error adding news:', error);
      message.error('Failed to add news');
    }
  };

  const handleDeleteNews = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'news', id));
      message.success('News deleted successfully');
      fetchNews();
    } catch (error) {
      console.error('Error deleting news:', error);
      message.error('Failed to delete news');
    }
  };

  useEffect(() => {
    fetchData();
    fetchNews();
  }, []);

  const registrationColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Contact', dataIndex: 'contactNumber', key: 'contactNumber' },
    { title: 'District', dataIndex: 'district', key: 'district' },
    { title: 'Institution', dataIndex: 'institution', key: 'institution' },
    { title: 'Timestamp', dataIndex: 'timestamp', key: 'timestamp' },
  ];

  const contactColumns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Contact Number', dataIndex: 'contactNumber', key: 'contactNumber' },
    { title: 'Timestamp', dataIndex: 'timestamp', key: 'timestamp' },
  ];

  const newsColumns = [
    { title: 'Title', dataIndex: 'title', key: 'title' },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Timestamp', dataIndex: 'timestamp', key: 'timestamp' },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record: News) => (
        <Button danger onClick={() => handleDeleteNews(record.id!)}>Delete</Button>
      ),
    },
  ];

  return (
    <AdminContainer>
      <h1>Admin Dashboard</h1>
      <TableContainer>
        <Tabs 
          defaultActiveKey="1"
          activeKey={activeKey}
          onChange={setActiveKey}
          tabBarExtraContent={{
            right: (
              <>
                {activeKey === "1" && (
                  <Button onClick={() => downloadCSV(registrations, registrationColumns, 'registrations.csv')}>
                    Download CSV
                  </Button>
                )}
                {activeKey === "2" && (
                  <Button onClick={() => downloadCSV(contacts, contactColumns, 'contacts.csv')}>
                    Download CSV
                  </Button>
                )}
                {activeKey === "3" && (
                  <Button type="primary" onClick={() => setNewsModalVisible(true)}>
                    Add News
                  </Button>
                )}
              </>
            )
          }}
        >
          <TabPane tab="Registrations" key="1">
            <Table dataSource={registrations} columns={registrationColumns} loading={loading} rowKey="id" scroll={{ x: true }} />
          </TabPane>
          <TabPane tab="Contacts" key="2">
            <Table dataSource={contacts} columns={contactColumns} loading={loading} rowKey="id" scroll={{ x: true }} />
          </TabPane>
          <TabPane tab="News" key="3">
            <Table dataSource={news} columns={newsColumns} loading={loading} rowKey="id" />
          </TabPane>
        </Tabs>
      </TableContainer>

      <Modal
        title="Add News"
        visible={newsModalVisible}
        onCancel={() => setNewsModalVisible(false)}
        footer={null}
      >
        <Form form={newsForm} onFinish={handleAddNews}>
          <Form.Item name="type" rules={[{ required: true }]}>
            <Select placeholder="Select type">
              <Option value="youtube">YouTube</Option>
              <Option value="image">Image</Option>
              <Option value="facebook">Facebook</Option>
              <Option value="instagram">Instagram</Option>
            </Select>
          </Form.Item>
          
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input placeholder="Title" />
          </Form.Item>

          <Form.Item name="description" rules={[{ required: true }]}>
            <Input.TextArea placeholder="Description" />
          </Form.Item>

          <Form.Item name="url" rules={[{ required: true }]}>
            <Input placeholder="URL (e.g., YouTube embed link, image link, Facebook post, Instagram post)" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </AdminContainer>
  );
};

export default Admin; 