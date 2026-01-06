//React imports
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
<<<<<<< HEAD
import { BOOKS_API } from "../../config/api";
=======
>>>>>>> d4446ef8b97bcccbb571f6607113400ab4e5974f

//component imports
import CardArray from "../../components/CardArray/CardArray";

//services imports
import { getData } from "../../services/fetch.service";

export default function Archives() {
  const [parsedArchivesArray, setParsedArchivesArray] = useState([]);

  useEffect(() => {
    async function parseFetchedData(api) {
      const parsedData = await getData(api);
      setParsedArchivesArray(parsedData);
    }
    parseFetchedData(BOOKS_API);
  }, []);

  return (
    <div>
      <CardArray cardArray={parsedArchivesArray} />
    </div>
  );
}
