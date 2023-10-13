import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-blue-500 p-4 mt-2">
        <div className="container mx-auto">
          <p className="text-white text-center">© {year} All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
