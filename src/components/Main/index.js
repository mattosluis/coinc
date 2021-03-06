import { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";

import pig from "../../assets/pig.svg"
import coinSound from "../../assets/coin.mp3";
import showOnlyTwoDecimal from "../../utils/showOnlyTwoDecimal";
import calculateSalaryFromWorkedHours from "../../utils/calculateSalaryFromWorkedHours";
import calculateSalaryFromPeriodType from "../../utils/calculateSalaryFromPeriodType";
import timeToNotifyEarns from "../../utils/timeToNotifyEarns";

import { Container, Button, PigImage } from "./styles";

export default function Main() {
  const location = useLocation();
  const { workedHours, salary, periodToBeNotificated, periodType } = location.state;
  const [, setTime] = useState(Date.now());
  const [earnedToday, setEarnedToday] = useState(0);
  const [earnsPerPeriod, setEarnsPerPeriod] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [animatePig, setAnimatedPig] = useState(false);
  const [audioCoin, setAudioCoint] = useState();

  useMemo(() => setAudioCoint(new Audio(coinSound)), []);

  useEffect(() => {
    const salaryByHour = calculateSalaryFromWorkedHours(workedHours, salary);
    const salaryByPeriod = calculateSalaryFromPeriodType(periodToBeNotificated, periodType, salaryByHour);
    setEarnsPerPeriod(salaryByPeriod);
  }, [workedHours, salary, periodToBeNotificated, periodType]);

  useEffect(() => {
    const interval = setInterval(() => { 
      setTime(Date.now());
      audioCoin.play();
      setEarnedToday(earnedToday + earnsPerPeriod);
      setShowConfetti(true);
      setAnimatedPig(true);
    }, timeToNotifyEarns(periodToBeNotificated, periodType));
    
    return (() => clearInterval(interval))
  }, [earnedToday, earnsPerPeriod, periodToBeNotificated, audioCoin, periodType]);

  useEffect(() => {
    if(showConfetti) {
      setTimeout(() => {
        setAnimatedPig(false);
        setShowConfetti(false)
      }, 6000)
    }
  }, [showConfetti]);

  return (
    <Container>
      {showConfetti && <Confetti numberOfPieces={300} recycle={false} />}
      <span>Só hoje você já ganhou</span>
      <span>R$ {showOnlyTwoDecimal(earnedToday)}</span>
      <PigImage src={pig} alt="Pig coin" animatePig={animatePig} />
      <Button to="/">Voltar para ajustar informações</Button>
    </Container>
  )
}
