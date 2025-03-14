import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getAssetPath } from "../../utils/paths";

const ExamSection = styled.section`
  padding: 5rem 0;
  background: rgb(241, 242, 243);
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
`;

const ExamCard = styled(({ to, ...props }) => {
  const isExternal = to.startsWith('http');
  return isExternal ? (
    <a href={to} target="_blank" rel="noopener noreferrer" {...props} />
  ) : (
    <Link to={to} {...props} />
  );
})`
  display: block;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ExamIcon = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 1rem;
  object-fit: contain;
`;

const ExamTitle = styled.h3`
  font-size: 24px;
  margin: 1rem 0;
  color: #18216d;
`;

const ExamDescription = styled.p`
  font-size: 16px;
  color: #546274;
`;

const ExamSubTitle = styled.p`
  font-size: 16px;
  color: #000;
`;

interface ExamLinksProps {
  title: string;
  exams: {
    title: string;
    subTitle: string;
    description: string;
    link: string;
    icon: string;
  }[];
}

const ExamLinks = ({ title, exams }: ExamLinksProps) => {
  return (
    <ExamSection id="exams">
      <Fade direction="up" triggerOnce>
        <SectionTitle>{title}</SectionTitle>
        <Row gutter={[32, 32]} justify="center">
          {exams.map((exam, index) => (
            <Col key={index} xs={18} sm={10} md={8} lg={6}>
              <ExamCard to={exam.link}>
                <ExamIcon src={getAssetPath(exam.icon)} alt={exam.title} />
                <ExamTitle>{exam.title}</ExamTitle>
                <ExamSubTitle>{exam.subTitle}</ExamSubTitle>
                <ExamDescription>{exam.description}</ExamDescription>
              </ExamCard>
            </Col>
          ))}
        </Row>
      </Fade>
    </ExamSection>
  );
};

export default ExamLinks; 