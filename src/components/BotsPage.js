import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {

  const [bots, setBots] = useState([])

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then(r => r.json())
    .then(data => setBots(data))
  }, [])

  function populateBotArmy(bot) {
    console.log(bot)
    setBots(bots.map((robot) => robot.id === bot.id ? { ...robot, recruited: true} : robot))
  }

  function depopulateBotArmy(bot) {
    console.log(bot)
    setBots(bots.map((robot) => robot.id === bot.id ? { ...robot, recruited: false} : robot))
  }

  function dischargeBot(bot) {
    setBots(bots.filter((robot) => robot.id !== bot.id))
  }

  return (
    <div>
      <YourBotArmy botsArmy={bots.filter((bot) => bot.recruited)} dischargeBot={dischargeBot} handleClick={depopulateBotArmy} />
      <BotCollection bots={bots} dischargeBot={dischargeBot} handleClick={populateBotArmy}/>
    </div>
  )
}

export default BotsPage;
