import { lazy } from "react";
import AboutContent from "../../content/AboutContent.json";
import HeroContent from "../../content/HeroContent.json";
import ProgramsContent from "../../content/ProgramsContent.json";
import ContactContent from "../../content/ContactContent.json";
import ExamLinksContent from "../../content/ExamLinksContent.json";

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
      <NewsCarousel
        title={"Latest Updates"}
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
    </>
  );
};

export default Home;
