import { lazy } from "react";
import AboutContent from "../../content/AboutContent.json";
import HeroContent from "../../content/HeroContent.json";
import ProgramsContent from "../../content/ProgramsContent.json";
import ContactContent from "../../content/ContactContent.json";
import ExamLinksContent from "../../content/ExamLinksContent.json";
import styled from "styled-components";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const About = lazy(() => import("../../components/About"));
const HeroBlock = lazy(() => import("../../components/HeroBlock"));
const Programs = lazy(() => import("../../components/Programs"));
const Contact = lazy(() => import("../../components/ContactForm"));
const ExamLinks = lazy(() => import("../../components/ExamLinks"));
const NewsCarousel = lazy(() => import("../../components/NewsCarousel"));

const VersileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  background-color: transparent;
`;

const VersileLink = styled.a`
  display: block;
  max-width: 100%;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const VersileImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Home = () => {
  return (
    <>
      <HeroBlock
        title={HeroContent.title}
        subtitle={HeroContent.subtitle}
        description={HeroContent.description}
        buttons={HeroContent.buttons}
        backgroundImages={HeroContent.backgroundImages}
      />
      <NewsCarousel
        title={"Latest Updates"}
      />
      <VersileContainer>
        <VersileLink href="https://versile.keralastudentsconference.com" target="_blank" rel="noopener noreferrer">
          <VersileImage src="/versile.png" alt="Versile - Did you find the word today?" />
        </VersileLink>
      </VersileContainer>
      <Container>
        <ScrollToTop />
        <About
          title={AboutContent.title}
          content={AboutContent.content}
        />
        <Programs
          title={ProgramsContent.title}
          programs={ProgramsContent.programs}
        />
        <ExamLinks
          title={ExamLinksContent.title}
          exams={ExamLinksContent.exams}
        />
        <Contact
          title={ContactContent.title}
          content={ContactContent.text}
          id="contact"
        />
      </Container>
    </>
  );
};

export default Home;
