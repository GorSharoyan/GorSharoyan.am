import React from "react";
export default function Card({ card }) {
  console.log(card);
  console.log(card["Author "]);
  return (
    <div>
      <h1>{card["Author "]}</h1>
      <p>{card["BookName "]}</p>
    </div>
  );
}
