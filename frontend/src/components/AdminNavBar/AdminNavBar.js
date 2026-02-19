import React from "react";

import { Link } from "react-router-dom";

export default function AdminNavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="admindashboard/movies">Add Movies</Link>
        </li>
        <li>
          <Link to="admindashboard/books">Add Books</Link>
        </li>
        <li>
          <Link to="admindashboard/music">Add Books</Link>
        </li>
      </ul>
    </div>
  );
}
