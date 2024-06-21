import {
  AboutMe,
  Contact,
  Experience,
  Introduction,
  Services,
} from '@/app/components';

const Home = () => {
  return (
    <>
      <Introduction />
      <div className='container'>
        <AboutMe />
        <Experience />
        <Services />
        <Contact />
      </div>
    </>
  );
};

export default Home;
