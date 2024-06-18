import Image from 'next/image';

const Home = () => {
  return (
    <Image
      src='/vercel.svg'
      alt='Vercel Logo'
      className='dark:invert'
      width={100}
      height={24}
      priority
    />
  );
};

export default Home;
