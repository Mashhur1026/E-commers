import "./nav.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Shop",
      path: "/Shop",
    },
    {
      name: "Blog",
      path: "/Blog",
    },
    {
      name: "About",
      path: "/About",
    },
    {
      name: "Contact",
      path: "/Contact",
    },
  ];

  return (
    <section id="header">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>

      <div>
        <ul id="navbar" className={isOpen ? "active" : ""}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
          <Link to="/Cart" id="lg-bag">
            <i className="far fa-shopping-bag"></i>
          </Link>
          <a id="close" onClick={() => setIsOpen(false)}>
            <i className="far fa-times"></i>{" "}
          </a>
        </ul>
      </div>

      <div id="mobile">
        <Link to="/Cart">
          <i className="far fa-shopping-bag"></i>
        </Link>
        <i
          id="bar"
          className="fas fa-outdent"
          onClick={() => setIsOpen(true)}
        ></i>
      </div>
    </section>
  );
}

export default Navbar;
