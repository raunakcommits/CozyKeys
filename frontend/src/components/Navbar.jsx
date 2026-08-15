import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="navbar-inner">

        {/* LOGO */}
        <motion.a
          href="/"
          className="brand"
          whileHover={{ scale: 1.03 }}
        >
          <span className="brand-mark">K</span>

          <span className="brand-name">
            Cozy<span>Keys</span>
          </span>
        </motion.a>

        {/* NAVIGATION */}
        <nav className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <a href="#properties" onClick={() => setMenuOpen(false)}>
            Buy
          </a>

          <a href="#properties" onClick={() => setMenuOpen(false)}>
            Rent
          </a>

          <a href="#sell" onClick={() => setMenuOpen(false)}>
            Sell
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            How it works
          </a>
        </nav>

        {/* ACTIONS */}
        <div className="navbar-actions">

          <a href="/login" className="login-link">
            Log in
          </a>

          <motion.a
            href="/register"
            className="navbar-cta"
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Get started
          </motion.a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </motion.header>
  );
};

export default Navbar;