import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="header">
      <div onClick={() => setIsOpen((prevData) => !prevData)}>X</div>
      <div className="nav-links" data-is-open={isOpen}>
        <NavLink to="/">
          <div className="link">Home</div>
        </NavLink>
        <NavLink to="/people">
          <div className="link">People</div>
        </NavLink>
      </div>
    </nav>
  );
};
