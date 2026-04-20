import React from "react";
import { Link } from "react-router-dom";

// component imports
import ArchivesNavBar from "../ArchivesNavBar/ArchivesNavBar.js";

export default function AdminNavBar(collections) {
  return ArchivesNavBar({ collections: collections, condition: "Add" });
}
