//React imports
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// config imports
import { SHCEMAS_API } from "../../config/api";

// component imports
import CardArray from "../../components/CardArray/CardArray";
import ArchivesNavBar from "../../components/ArchivesNavBar/ArchivesNavBar.js";

// services imports
import { getData } from "../../services/fetch.service";

// custom hooks imports
import { useAuth } from "../../context/AuthProvider";

// utils imports
import {
  filterArchivesCollections,
  filterCollectionNames
} from "../../utils/DBCollectionsUtils";
import { Collections } from "@mui/icons-material";

export default function Archives() {
  const [parsedCollectionsNames, setParsedCollectionsNames] = useState([]);
  const [parsedArchivesArray, setParsedArchivesArray] = useState([]);
  const { isAuthentificated } = useAuth();

  useEffect(() => {
    async function parseFetchedData(api) {
      console.log("api in parseFetchedData is", api);
      try {
        const fetchedData = await getData(api);

        // Exclude the "schemas" collection
        const filteredData = filterArchivesCollections(fetchedData);
        const collectionNames = filterCollectionNames(filteredData);

        setParsedArchivesArray(filteredData);
        setParsedCollectionsNames(collectionNames);
        console.log("cllection names:", collectionNames);
      } catch (error) {
        console.error("Failed to fetch archives data:", error);
      }
    }

    parseFetchedData(SHCEMAS_API);
  }, []);
  console.log("collection names:", parsedCollectionsNames);
  console.log("parsed archives array:", parsedArchivesArray);

  return (
    <div>
      <div>
        <ArchivesNavBar
          collectionNames={parsedCollectionsNames}
          condition={"My"}
        />
      </div>
      <div>
        <Outlet
          context={{
            collections: parsedArchivesArray,
            canEdit: isAuthentificated
          }}
        />
      </div>
      {/* <div> */}
      {/* <CardArray
          cardArray={parsedArchivesArray}
          canEdit={isAuthentificated}
        />
      </div> */}
    </div>
  );
}
