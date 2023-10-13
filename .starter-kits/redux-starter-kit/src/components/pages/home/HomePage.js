import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div>Home Page</div>
      <Link to="about">Navigate to About</Link>
    </>
  );
};

export default HomePage;
