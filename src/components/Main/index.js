import { useEffect, useState } from "react";

import pig from "../../assets/pig.svg"
import coinSound from "../../assets/coin.mp3";
import showOnlyTwoDecimal from "../../utils/showOnlyTwoDecimal";

import { Container } from "./styles";

export default function Main({ workedHours = 200, salary = 3500, period = 1 }) {
  const [time, setTime] = useState(Date.now());
  const [earnedToday, setEarnedToday] = useState(0);
  const [earnsPerPeriod, setEarnsPerPeriod] = useState(0);
  const audioCoin = new Audio(coinSound);

  useEffect(() => {
    const salaryByHour = salary / workedHours;
    const salaryByPeriod = ((period * salaryByHour) / 60);
    setEarnsPerPeriod(salaryByPeriod);
  }, [workedHours, salary, period]);

  useEffect(() => {
    const interval = setInterval(() => { 
      setTime(Date.now());
      // audioCoin.play();
      setEarnedToday(earnedToday + earnsPerPeriod);
    }, period * 4000);
    
    return (() => clearInterval(interval));
  }, [earnedToday, earnsPerPeriod, period, audioCoin]);

  return (
    <Container>
      <span>Só hoje você já ganhou</span>
      <span>R$ {showOnlyTwoDecimal(earnedToday)}</span>
      <img src={pig} alt="Pig coin"/>
    </Container>
  )
}
