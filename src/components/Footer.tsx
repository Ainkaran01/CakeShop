const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} AbiCakeShop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
