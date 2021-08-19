import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, addBotToArmy}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => <BotCard bot={bot} addBotToArmy={addBotToArmy} />)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
