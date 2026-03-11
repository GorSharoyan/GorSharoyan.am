import React from "react";

import { Link } from "react-router-dom";

export default function AdminNavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="movies">Add Movies</Link>
        </li>
        <li>
          <Link to="books">Add Books</Link>
        </li>
        <li>
          <Link to="music">Add Music</Link>
        </li>
      </ul>
    </div>
  );
}
