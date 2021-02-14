import { useState } from "react";
import { Redirect } from "react-router-dom";

import { Container, Form, FormInputs } from "./styles";

export default function Home() {
  const [workedHours, setWorkedHours] = useState(1);
  const [salary, setSalary] = useState(1);
  const [periodToBeNotificated, setperiodToBeNotificated] = useState(1);
  const [periodType, setPeriodType] = useState('Minutos');
  const [canRedirect, setCanRedirect] = useState(false);

  function handleSubmit() {    
    setCanRedirect(true);
  }

  return (
    <Container>
      { canRedirect ? (
        <Redirect to={{ 
          pathname: "/earn-money",
          state: { workedHours, salary, periodToBeNotificated, periodType }
        }} />
        ) : (
        <Form onSubmit={() => handleSubmit()}>
          <h1>Bem-vindo ao Coinc!</h1>
          <p>Descubra o quanto você ganha por um período de tempo</p>
          <FormInputs>
            <label htmlFor="WorkedHours">Horas trabalhadas por mês</label>
            <input 
              id="WorkedHours" 
              type="number" 
              placeholder="220"
              min="1" 
              required
              autoFocus
              onChange={e => setWorkedHours(e.target.value)}
            />

            <label htmlFor="Salary">Salário mensal recebido</label>
            <input 
              id="Salary"
              type="number"
              placeholder="3700"
              min="1"
              required
              onChange={e => setSalary(e.target.value)}
            />

            <label htmlFor="PeriodToNotificate">Quanto tempo você quer ver seu dinheir entrar?</label>
            <input 
              id="PeriodToNotificate"
              type="number"
              placeholder="30"
              min="1"
              onChange={e => setperiodToBeNotificated(e.target.value)}
            />

            <select value={periodType} onChange={e => setPeriodType(e.target.value)}>
              <option>Segundos</option>
              <option defaultChecked>Minutos</option>
              <option>Horas</option>
            </select>
          </FormInputs>
          <button type="submit">Ganhar dinheiro!</button>
        </Form>
      )}
    </Container>
  )
}
