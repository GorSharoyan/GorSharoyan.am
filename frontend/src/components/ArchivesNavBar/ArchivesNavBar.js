//library imports :
import React from "react";
import { Link } from "react-router-dom";

export default function ArchivesNavBar({
  collectionNames = [],
  condition = " "
}) {
  // Determine prefix based on condition
  const prefixMap = {
    Add: "Add",
    My: "My"
  };

  const prefix = prefixMap[condition] || "";

  const renderGroups = collectionNames.map((item, index) => (
    <li key={`${item}-${index}`}>
      <Link to={item}>{prefix ? `${prefix} ${item}` : item}</Link>
    </li>
  ));

  return (
    <nav>
      <ol>{renderGroups}</ol>
    </nav>
  );
}
