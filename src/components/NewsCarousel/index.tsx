import { useState, useEffect } from 'react';
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getAssetPath } from "../../utils/paths";
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { News } from '../../types/news';
import { LoadingOutlined } from '@ant-design/icons';

import styled from "styled-components";

const NewsSection = styled.section`
  padding: 4rem 0;
  background: #fff;
`;

const NewsTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: #18216d;
`;

const CarouselContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const CarouselSlide = styled.div<{ active: boolean }>`
  display: ${props => props.active ? 'block' : 'none'};
  transition: all 0.3s ease-in-out;
`;

const CarouselButton = styled.button<{ position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${props => props.position}: 0;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const MediaContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const IframeContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const NewsDescription = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: #18216d;
  font-size: 1.1rem;
`; 

interface NewsCarouselProps {
  title: string;
}

const NewsCarousel = ({ title }: NewsCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsQuery = query(
          collection(db, 'news'),
          orderBy('timestamp', 'desc')
        );
        const snapshot = await getDocs(newsQuery);
        const newsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as News[];
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === news.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? news.length - 1 : prev - 1));
  };

  const renderMedia = (item: News) => {
    switch (item.type) {
      case 'youtube':
        return (
          <IframeContainer>
            <iframe
              src={item.url}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </IframeContainer>
        );
      case 'image':
        return (
          <img 
            src={getAssetPath(item.url)} 
            alt={item.title}
            style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
          />
        );
      case 'facebook':
      case 'instagram':
        return (
          <IframeContainer>
            <iframe
              src={item.url}
              title={item.title}
              allowTransparency={true}
              allow="encrypted-media"
            />
          </IframeContainer>
        );
    }
  };

  if (loading) {
    return (
      <NewsSection>
        <Row justify="center" align="middle">
          <Col>
            <LoadingOutlined style={{ fontSize: 24 }} />
          </Col>
        </Row>
      </NewsSection>
    );
  }

  return (
    <NewsSection>
      <Fade direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <Col span={24}>
            <NewsTitle>{title}</NewsTitle>
            <CarouselContainer>
              <CarouselButton onClick={prevSlide} position="left">
                <FontAwesomeIcon icon={faChevronLeft} />
              </CarouselButton>
              
              {news.map((item, index) => (
                <CarouselSlide
                  key={index}
                  active={index === currentSlide}
                >
                  <MediaContainer>
                    {renderMedia(item)}
                  </MediaContainer>
                  {item.type === 'image' && item.description && (
                    <NewsDescription>{item.description}</NewsDescription>
                  )}
                </CarouselSlide>
              ))}

              <CarouselButton onClick={nextSlide} position="right">
                <FontAwesomeIcon icon={faChevronRight} />
              </CarouselButton>
            </CarouselContainer>
          </Col>
        </Row>
      </Fade>
    </NewsSection>
  );
};

export default NewsCarousel; 