const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground">
            © {currentYear} Krishnakumar M.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;