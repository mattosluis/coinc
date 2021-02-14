import { useState } from "react";
import { Redirect } from "react-router-dom";

import { Container, Form, FormInputs } from "./styles";

export default function Home() {
  const [workedHours, setWorkedHours] = useState(1);
  const [salary, setSalary] = useState(1);
  const [periodToBeNotificated, setperiodToBeNotificated] = useState(1);
  const [canRedirect, setCanRedirect] = useState(false);

  function handleSubmit() {
    setCanRedirect(true);
  }

  return (
    <Container>
      { canRedirect ? (
        <Redirect to={{ 
          pathname: "/earn-money",
          state: { workedHours, salary, periodToBeNotificated }
        }} />
        ) : (
        <Form onSubmit={() => handleSubmit()}>
          <h1>Bem-vindo ao Coinc!</h1>
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

            <label htmlFor="PeriodToNotificate">Periodo que deseja ser notificado (segundos)</label>
            <input 
              id="PeriodToNotificate"
              type="number"
              placeholder="30"
              min="10"
              onChange={e => setperiodToBeNotificated(e.target.value)}
            />
          </FormInputs>
          <button type="submit">Ganhar dinheiro!</button>
        </Form>
      )}
    </Container>
  )
}
