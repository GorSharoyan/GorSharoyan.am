//React imports
import React, { useEffect, useState } from "react";

// config imports
import { SHCEMAS_API } from "../../config/api";

// component imports
import CardArray from "../../components/CardArray/CardArray";

// services imports
import { getData } from "../../services/fetch.service";

// custom hooks imports
import { useAuth } from "../../context/AuthProvider";

// utils imports
import {
  filterArchivesCollections,
  filterCollectionNames
} from "../../utils/DBCollectionsUtils";

export default function Archives() {
  const [parsedCollectionsNames, setParsedCollectionsNames] = useState([]);
  const [parsedArchivesArray, setParsedArchivesArray] = useState([]);
  const { isAuthentificated } = useAuth();

  useEffect(() => {
    async function parseFetchedData(api) {
      try {
        const fetchedData = await getData(api);

        // Exclude the "schemas" collection
        const filteredData = filterArchivesCollections(fetchedData);
        const collectionNames = filterCollectionNames(filteredData);

        setParsedArchivesArray(filteredData);
        setParsedCollectionsNames(collectionNames);
      } catch (error) {
        console.error("Failed to fetch archives data:", error);
      }
    }

    parseFetchedData(SHCEMAS_API);
  }, []);

  return (
    <div>
      <CardArray cardArray={parsedArchivesArray} canEdit={isAuthentificated} />
    </div>
  );
}
