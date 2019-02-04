import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-item"),
      0
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
        });
      });
    }
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/">
              Home
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
            {/* <Link className="navbar-item" to="/music">
                Music
              </Link> */}
            {/* <Link className="navbar-item" to="/design">
                Design
              </Link> */}
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
