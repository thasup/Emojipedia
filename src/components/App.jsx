import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map( emoji => (
          <Card 
              key={emoji.id}
              id={emoji.id}
              image={emoji.emoji}
              title={emoji.name}
              content={emoji.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;