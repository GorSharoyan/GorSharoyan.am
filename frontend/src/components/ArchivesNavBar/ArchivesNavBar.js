// library imports:
import React from "react";
import { Link } from "react-router-dom";

export default function ArchivesNavBar({
  collectionNames = [],
  condition = " ",
  collectionOnSelect = () => {}
}) {
  // Determine prefix based on condition
  const prefixMap = {
    Add: "Add",
    My: "My"
  };

  const prefix = prefixMap[condition] || "";
  let renderGroups = [];

  /**
   * This section of code is dedicated to navigating between two core concepts
   * of navigation in React.js.
   *
   * One approach is used for rendering child elements within the Archives page,
   * where state-based navigation is applied.
   *
   * In this case, we rely on state management rather than routing mechanisms.
   * This is referred to as UI-based navigation, leveraging a parent-child
   * relationship based on the selected collection. A useEffect in the Archives
   * page will fetch data from the database when a collection is selected.
   *
   * In this scenario, we do not use useOutlet or similar routing tools; instead,
   * we rely on React’s component composition and state inheritance patterns.
   *
   * The second approach uses React Router (e.g., useOutlet and Link components)
   * to enable navigation across the application. This method relies on routing
   * rather than state inheritance.
   *
   * In this case, I currently have some non-generic and hardcoded data, since
   * each collection requires an individual form component. However, this approach
   * provides the advantage of structured navigation with secure routes.
   *
   * Overall, I aim to use both approaches in parallel to gain experience with
   * each navigation pattern and understand their trade-offs in real-world usage.
   */

  switch (condition) {
    case "My":
      renderGroups = collectionNames.map((item) => (
        <li
          key={item}
          onClick={() => {
            collectionOnSelect(item);
          }}
          style={{ cursor: "pointer" }}
        >
          {condition} {item}
        </li>
      ));
      break;
    case "Add":
      renderGroups = collectionNames.map((item, index) => (
        <li key={`${item}-${index}`}>
          <Link to={prefix + "-" + item}>
            {prefix ? `${prefix} ${item}` : item}
          </Link>
        </li>
      ));
      break;
  }

  return <ol>{renderGroups}</ol>;
}
