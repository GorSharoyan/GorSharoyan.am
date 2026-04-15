import React from "react";

export default function Card({ card }) {
  return (
    <div>
      <h1>{card.author}</h1>
      <p>{card.name}</p>
    </div>
  );
}
