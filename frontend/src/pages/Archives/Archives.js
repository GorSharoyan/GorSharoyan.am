//React imports
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

//component imports
import CardArray from "../../components/CardArray/CardArray";

//services imports
import { getData } from "../../services/fetch.service";

export default function Archives({ archivesApi }) {
  const [parsedArchivesArray, setParsedArchivesArray] = useState([]);

  useEffect(() => {
    async function parseFetchedData(api) {
      const parsedData = await getData(api);
      setParsedArchivesArray(parsedData);
    }
    parseFetchedData(archivesApi);
  }, [archivesApi]);

  return (
    <div>
      <CardArray cardArray={parsedArchivesArray} />
    </div>
  );
}
