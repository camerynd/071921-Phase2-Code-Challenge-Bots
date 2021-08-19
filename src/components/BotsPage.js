import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {

  const [bots, setBots] = useState([])
  const [allBots, setAllBots] = useState([])

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then(r => r.json())
    .then(data => populate(data))
  }, [])

  function populate(data) {
    setBots(data)
    setAllBots(data)
  }

  function populateBotArmy(bot) {
    const newBot = bots.map((robot) => robot.id === bot.id ? { ...robot, recruited: true} : robot)
    setBots(newBot)
  }

  function depopulateBotArmy(bot) {
    const removeBot = bots.map((robot) => robot.id === bot.id ? !robot : robot)
    setBots(removeBot)
  }

  function dischargeBot(bot) {
    const dischargeBot = bots.map((robot) => robot.id === bot.id ? !robot : robot)
    setAllBots(dischargeBot)
  }

  const recruitedBots = bots.filter((bot) => bot.recruited)

  return (
    <div>
      <YourBotArmy botsArmy={recruitedBots} removeBotFromArmy={depopulateBotArmy} goodbyeBot={dischargeBot} />
      <BotCollection bots={allBots} addBotToArmy={populateBotArmy} goodbyeBot={dischargeBot}/>
    </div>
  )
}

export default BotsPage;
