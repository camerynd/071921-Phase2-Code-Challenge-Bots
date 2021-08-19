import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, addBotToArmy}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => <BotCard bot={bot} addBotToArmy={addBotToArmy} key={bot.id} />)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
