import { NavLink } from "react-router";
import Logo from "./Logo.jsx";

// List of navigation links, so adding a page later only needs one new line
const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About Me", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Education", path: "/education" },
  { label: "Services", path: "/services" },
  { label: "Contact Me", path: "/contact" },
];

function Navbar() {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-brand">
        <Logo />
        <span>Your Name</span>
      </NavLink>
      <nav>
        <ul className="navbar-links">
          {navigationLinks.map((link) => (
            <li key={link.path}>
              {/* NavLink automatically adds an "active" class to the current page */}
              <NavLink to={link.path} end={link.path === "/"}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;