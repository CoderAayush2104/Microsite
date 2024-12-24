import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Microsite Generator</h1>
      <p>Register a microsite to create your own independent page.</p>
      <Link href="/microsite/preview">
       Create Microsite
      </Link>
    </div>
  );
};

export default Home;
