function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p>
          © {new Date().getFullYear()} Bright Future Library ·{' '}
          <a href="#home">Back to top</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
