export default function timeToNotifyEarns(periodToBeNotificated, periodType) {
  switch(periodType) {
    case 'Segundos':
      return periodToBeNotificated * 1000;
    case 'Minutos':
      return periodToBeNotificated * 60000;
    case 'Horas':
      return periodToBeNotificated * 3600000;
    default:
      break;
  }
}