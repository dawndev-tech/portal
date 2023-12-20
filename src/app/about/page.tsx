import Link from 'next/link';

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <div>
        Back to <Link href="/" />
      </div>
    </>
  );
};

export default About;
