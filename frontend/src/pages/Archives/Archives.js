//React imports
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// config imports
import { SHCEMAS_API } from "../../config/api";
import { Archives_API } from "../../config/api";

// component imports
import CardArray from "../../components/CardArray/CardArray";
import ArchivesNavBar from "../../components/ArchivesNavBar/ArchivesNavBar.js";

// services imports
import { getData } from "../../services/fetch.service";

// custom hooks imports
import { useAuth } from "../../context/AuthProvider";

// utils imports
import { filterCollectionNames } from "../../utils/DBCollectionsUtils";
import { Collections } from "@mui/icons-material";

export default function Archives() {
  // 1) this hook is dediceted for the nav bar/router in order to get all the names
  // of the exitiing collections in the Arichves DB.
  const [parsedCollectionsNames, setParsedCollectionsNames] = useState([]);
  // 2) this hook is dedicated for the all the collecitons inside the Archives DB.
  const [parsedArchivesArray, setParsedArchivesArray] = useState([]);
  // 3) this hooks is dedeicated to check the authentification status of the user.
  const { isAuthentificated } = useAuth();
  // 4) this hook is dedicated to understand which collection we are willing to render in the card array.
  const [selectedCollectionName, setSelectedCollectionName] = useState("books");

  useEffect(() => {
    //1) This funcion is used to get all the names of all the collections in the Archives DB
    async function parseFetchedCollectionNames() {
      const parsedCollectionNames = await getData(SHCEMAS_API);

      const filteredCollectionNames = filterCollectionNames(
        parsedCollectionNames
      );

      setParsedCollectionsNames(filteredCollectionNames);
    }

    //2) This funciton is used to parse the selected collection
    async function parseFetchedCollections() {
      const parsedCollections = await getData(
        Archives_API + "/" + `${selectedCollectionName}`
      );
      setParsedArchivesArray(parsedCollections);
    }

    parseFetchedCollectionNames();
    parseFetchedCollections();
  }, [selectedCollectionName]);

  //Debugging logs
  console.log("collection names:", parsedCollectionsNames);
  console.log("parsed archives array:", parsedArchivesArray);
  console.log("selected collection name:", selectedCollectionName);

  return (
    <div>
      <div>
        <ArchivesNavBar
          collectionNames={parsedCollectionsNames}
          condition={"My"}
          collectionOnSelect={setSelectedCollectionName}
        />
      </div>
      <div>
        This is the place where sommunded collection will be rendered in the
        card array
        <CardArray
          collections={parsedArchivesArray}
          canEdit={isAuthentificated}
        />
      </div>
    </div>
  );
}
