import React from "react";
//library inports
import { useState, useEffect } from "react";

//component imports
import CardArray from "../../components/CardArray/CardArray";

//services imports
import { getData } from "../../services/fetch.service";

//API imports
import { TechTalk_API, BOOKS_API } from "../../config/api";

export default function TechTalk() {
  const [techTalks, setTechTalcks] = useState([]);

  useEffect(() => {
    function parseTechTalks() {
      const parsedTechTalks = getData(BOOKS_API);
      setTechTalcks(parsedTechTalks);
    }
    parseTechTalks();
  }, []);

  return (
    <div>
      <p> This is a dedicated page for a tech talk agenda </p>;
    </div>
  );
}
