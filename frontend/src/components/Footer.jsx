const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">

            <a href="/" className="brand">
              <span className="brand-mark">K</span>

              <span className="brand-name">
                Cozy<span>Keys</span>
              </span>
            </a>

            <p>
              Find your perfect place,
              <br />
              smarter.
            </p>

          </div>

          <div className="footer-column">

            <h4>Explore</h4>

            <a href="/properties">Buy</a>
            <a href="/properties">Rent</a>
            <a href="/properties">Properties</a>
            <a href="/favorites">Favorites</a>

          </div>

          <div className="footer-column">

            <h4>Company</h4>

            <a href="#about">About us</a>
            <a href="#about">How it works</a>
            <a href="#sell">For sellers</a>
            <a href="#contact">Contact</a>

          </div>

          <div className="footer-column">

            <h4>Account</h4>

            <a href="/login">Log in</a>
            <a href="/register">Create account</a>
            <a href="/dashboard">Dashboard</a>

          </div>

        </div>

        <div className="footer-bottom">

          <span>
            © 2026 CozyKeys. All rights reserved.
          </span>

          <span>
            Made for finding places that feel like home.
          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;