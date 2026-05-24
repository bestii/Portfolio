import AboutMe from "@/components/about-me/AboutMe";
import Contact from "@/components/contact/Contact";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Introduction from "@/components/introduction/Introduction";
import Skills from "@/components/skills/Skills";
import { loadCmsData } from "@/services/cmsService";

const Home = async () => {
  const data = await loadCmsData();

  return (
    <>
      {data.introduction && (
        <Introduction
          greeting={data.introduction.greeting}
          name={data.introduction.name}
          tagline={data.introduction.tagline}
          description={data.introduction.description}
        />
      )}
      <div className="container mx-auto px-4">
        {data.about && <AboutMe paragraphs={data.about.paragraphs} />}
        {data.experiences && <Experience items={data.experiences} />}
        {data.education && <Education items={data.education} />}
        <Skills />
        {data.contact && (
          <Contact
            subheading={data.contact.subheading}
            heading={data.contact.heading}
            description={data.contact.description}
            buttonText={data.contact.buttonText}
            email={data.contact.email}
          />
        )}
        <Footer />
      </div>
    </>
  );
};

export default Home;
