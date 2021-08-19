import React from "react";
import BotSpecs from "./BotSpecs"

function YourBotArmy({botsArmy}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botsArmy.map((bot) => <BotSpecs bot={bot} />)}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
