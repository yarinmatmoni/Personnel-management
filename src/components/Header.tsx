import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Hamburger } from "./index";
import homeIcon from "../assets/home.svg";
import contactsIcon from "../assets/contacts.svg";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onMenuClick = () => {
    setIsOpen((prevData) => !prevData);
  };

  return (
    <nav className="header">
      <Hamburger onMenuClick={() => onMenuClick()} isOpen={isOpen} />
      <div className="nav-links" data-is-open={isOpen}>
        <div className="links-container">
          <NavLink to="/" onClick={() => onMenuClick()}>
            <div className="link">
              <img src={homeIcon} alt="home" />
              <div className="link-name">Home</div>
            </div>
          </NavLink>
          <NavLink to="/people" onClick={() => onMenuClick()}>
            <div className="link">
              <img src={contactsIcon} alt="contacts" />
              <div className="link-name">People</div>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
