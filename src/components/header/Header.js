import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import logo from "../../assets/images/logo-georgia_v2.png";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const Header = ({ theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const link = settings.isSplash ? "/splash" : "/home";

  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <header className="header">
        <NavLink to={link} tag={Link} className="logo">
          <img src={logo} alt="Logo" className="header-logo" />
        </NavLink>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ backgroundColor: theme.body }}>
          {[
            { to: "/home", label: "Αρχική" },
            { to: "/education", label: "Σπουδές" },
            { to: "/experience", label: "Εμπειρία" },
            // { to: "/gallery", label: "Συλλογή" },
            { to: "/contact", label: "Επικοινωνία" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ color: theme.text }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={onMouseOut}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
    </Fade>
  );
};

export default Header;
