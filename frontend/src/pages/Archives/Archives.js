//React imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// config imports
import { SHCEMAS_API } from "../../config/api";
import { Archives_API } from "../../config/api";

// component imports
import CardArray from "../../components/CardArray/CardArray";
import ArchivesNavBar from "../../components/ArchivesNavBar/ArchivesNavBar.js";
import SearchBar from "../../components/SearchBar/SearchBar.js";
import AddItem from "../../components/AddItem/AddItem.js";
// services imports
import { getData } from "../../services/fetch.service";

// custom hooks imports
import { useAuth } from "../../context/AuthProvider";

// utils imports
import findParsedCollection, {
  filterCollectionNames
} from "../../utils/DBCollectionsUtils";
import { Collections, CompareSharp } from "@mui/icons-material";

export default function Archives() {
  // 1) this hook is dediceted for the nav bar/router in order to get all the name of the exitiing collections in the Arichves DB.
  const [parsedCollectionsNames, setParsedCollectionsNames] = useState([]);
  // 2) this hook is dedicated for the all the collecitons inside the Archives DB.
  const [parsedArchivesArray, setParsedArchivesArray] = useState([]);
  // 3) this hooks is dedeicated to check the authentification status of the user.
  const { isAuthentificated } = useAuth();
  // 4) this hook is dedicated to understand which collection we are willing to render in the card array.
  const [selectedCollectionName, setSelectedCollectionName] = useState("books");
  // 5) this hook is dedicated to pass schema of the selected collection to the child components of this component.
  //They will later use it as a initial values of the form thus it will be possible to create relevant forms
  const [selectedCollectionsSchema, setSelectedCollectionsSchema] =
    useState("");
  // 6) this hook is dedicated to create an array that is already filetered according to searchBars results and is ready for render
  const [filteredParsedArchivesArray, setfilteredParsedArchivesArray] =
    useState([]);
  //7) this hook is dedicated to restar CardArray and refetch data after some changes happen in the single element and we need to see the updated list
  const [triggerArrayReload, setTriggerArrayReload] = useState();
  //8) this hook is used to handle navigation to the add-item form that will be responsible for adding additional items to this or any other collection
  const navigate = useNavigate();

  useEffect(() => {
    //1) This funcion is used to get all the names of all the collections in the Archives DB
    async function parseFetchedCollectionNames() {
      const parsedSchemas = await getData(SHCEMAS_API);
      const filteredCollectionNames = filterCollectionNames(parsedSchemas);
      const selectedCollectionsSchema = findParsedCollection(
        selectedCollectionName,
        parsedSchemas
      );
      setParsedCollectionsNames(filteredCollectionNames);
      setSelectedCollectionsSchema(selectedCollectionsSchema);
    }

    //2) This funciton is used to parse the selected collection
    async function parseFetchedCollections() {
      const parsedCollections = await getData(
        Archives_API + "/" + `${selectedCollectionName}`
      );
      setParsedArchivesArray(parsedCollections);
      setfilteredParsedArchivesArray(parsedCollections);
    }

    parseFetchedCollectionNames();
    parseFetchedCollections();
  }, [selectedCollectionName, triggerArrayReload]);

  //Debugging logs
  console.log("collection names:", parsedCollectionsNames);
  console.log("parsed archives array:", parsedArchivesArray);
  console.log("selected collection name:", selectedCollectionName);
  console.log("selected collections Schema:", selectedCollectionsSchema);

  // console.log("search result is here:", filteredParsedArchivesArray);

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
        <SearchBar
          arraytoFilterName={selectedCollectionName}
          arraytoFilter={parsedArchivesArray}
          filteredArray={setfilteredParsedArchivesArray}
        />
      </div>
      <div>
        <div>
          <h3>
            {`Check My ${selectedCollectionName
              .charAt(0)
              .toUpperCase()}${selectedCollectionName.slice(1)}`}
          </h3>
        </div>
        <div>
          {useAuth ? (
            <AddItem
              itemName={selectedCollectionName.slice(
                0,
                selectedCollectionName.length - 1
              )}
              onClick={() => {
                navigate(`/admindashboard/add-${selectedCollectionName}`);
                console.log("click is activated");
              }}
            />
          ) : (
            <div></div>
          )}
        </div>
        {filteredParsedArchivesArray.length > 0 ? (
          <div>
            <CardArray
              selectedCollectionName={selectedCollectionName}
              selectedCollectionsSchema={selectedCollectionsSchema}
              collections={filteredParsedArchivesArray}
              canEdit={isAuthentificated}
              arrayReloadLogic={setTriggerArrayReload}
              arrayReloadState={triggerArrayReload}
            />
          </div>
        ) : (
          <div>
            <h3>
              {`No ${selectedCollectionName
                .charAt(0)
                .toUpperCase()}${selectedCollectionName.slice(1)} to display`}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
