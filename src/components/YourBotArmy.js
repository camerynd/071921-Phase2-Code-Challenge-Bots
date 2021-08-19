import React from "react";
import BotCard from "./BotCard"

function YourBotArmy({botsArmy, handleClick, dischargeBot}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botsArmy.map((bot) => <BotCard dischargeBot={dischargeBot} bot={bot} key={bot.id} handleClick={handleClick} />)}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
