import AboutMe from "@/components/about-me/AboutMe";
import Contact from "@/components/contact/Contact";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Introduction from "@/components/introduction/Introduction";

const Home = () => {
  return (
    <main>
      <Introduction />
      <div className="container mx-auto px-4">
        <AboutMe />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
