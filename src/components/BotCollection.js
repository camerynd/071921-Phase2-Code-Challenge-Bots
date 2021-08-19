import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, handleClick, dischargeBot}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => <BotCard dischargeBot={dischargeBot} bot={bot} handleClick={handleClick} key={bot.id} />)}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
