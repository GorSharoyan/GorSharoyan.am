import react from "react";
//React Router import
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/bookstore">My BookStore</NavLink>
        </li>
        <li>
          <NavLink to="/projects">My Projects</NavLink>
        </li>
        <li>
          <NavLink to="/map">My Map</NavLink>
        </li>
      </ul>
    </nav>
  );
}
