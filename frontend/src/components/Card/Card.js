import React from "react";
export default function Card({ card }) {
  console.log(card);
  return (
    <div>
      <h1>{card.author}</h1>
      <p>{card.name}</p>
    </div>
  );
}
