import Link from 'next/link';

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <div>
        Back to <Link href="/" title="Home" />
      </div>
    </>
  );
};

export default About;
