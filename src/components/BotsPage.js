import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {

  const [bots, setBots] = useState([])
  const [botsArmy, setBotsArmy] = useState([])

  useEffect(() => {
    fetch('http://localhost:8002/bots')
    .then(r => r.json())
    .then(data => setBots(data))
  }, [])

  function populateBotArmy(bot) {
    setBotsArmy([...botsArmy, bot])
    console.log(botsArmy)
  }

  return (
    <div>
      <YourBotArmy botsArmy={botsArmy} />
      <BotCollection bots={bots} addBotToArmy={populateBotArmy} />
    </div>
  )
}

export default BotsPage;
