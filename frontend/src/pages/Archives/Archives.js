//React imports
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

//config imports
import { BOOKS_API, API_BASE_URL } from "../../config/api";

//component imports
import CardArray from "../../components/CardArray/CardArray";

//services imports
import { getData } from "../../services/fetch.service";

//Custom Hooks imports
import { useAuth } from "../../context/AuthProvider";

export default function Archives() {
  const [parsedArchivesArray, setParsedArchivesArray] = useState([]);
  const { isAuthentificated } = useAuth();

  useEffect(() => {
    async function parseFetchedData(api) {
      const parsedData = await getData(api);
      console.log(parsedData);
      setParsedArchivesArray(parsedData);
    }
    parseFetchedData(BOOKS_API);
  }, []);

  if (isAuthentificated) {
    return (
      <div>
        <CardArray cardArray={parsedArchivesArray} />
      </div>
    );
  } else {
    return;
    <div>
      <CardArray cardArray={parsedArchivesArray} />
    </div>;
  }
}
