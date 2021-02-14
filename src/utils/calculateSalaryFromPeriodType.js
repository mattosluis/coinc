export default function calculateSalaryFromPeriodType(periodToBeNotificated, periodType, salary) {
  const salaryByPeriod = periodToBeNotificated * salary;
  
  switch(periodType) {
    case 'Segundos':
      return salaryByPeriod / 60 / 60;
    case 'Minutos':
      return salaryByPeriod / 60;
    case 'Horas':
      return salaryByPeriod;
    default:
      break;
  }
}