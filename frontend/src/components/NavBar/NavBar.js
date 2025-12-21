import React from "react";

// Libraries imports
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">Homepage</Link>
      </li>
      <li>
        <Link to="/experience">My Experience</Link>
      </li>
      <li>
        <Link to="/hobbies">My Hobbies</Link>
      </li>
      <li>
        <Link to="/archives">My Archives</Link>
      </li>
    </ul>
  );
}
