const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-4">
      <div className="text-center">
        <p className="text-gray-500 text-xs mb-1">
          © {currentYear} RyzaFit
        </p>
        <p className="text-gray-400 text-xs">
          by{' '}
          <a
            href="https://timpilabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            TimpiLabs
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
