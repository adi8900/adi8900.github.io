import React from "react";

function Interests() {
  const interests = ["Programowanie", "Muzyka", "Gry", "Sport"];
  return (
    <div>
      <h1>Moje zainteresowania</h1>
      <ul>
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </div>
  );
}

export default Interests;