//Library imports
import React from "react";

// component imports
import AdminNavBar from "../AdminNavBar/AdminNavBar";

export default function SideBar(DBcollections) {
  const collections = DBcollections;
  return <AdminNavBar />;
}
