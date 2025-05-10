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
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.703298791809!2d76.2205321!3d10.985753100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cd0003297241%3A0xb7c81b8c65767d17!2sKerala%20Students%20Conference%20Venue!5e0!3m2!1sen!2sin!4v1746877673274!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0, maxWidth: '100%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Kerala Students Conference Venue Map"
        />
      </div>
    </>
  );
};

export default Home;
