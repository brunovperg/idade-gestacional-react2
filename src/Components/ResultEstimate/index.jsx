/* eslint-disable react/prop-types */
import style from './ResultEstimate.module.scss';

const ResultEstimate = (props) => {
  const expectDays = new Date();
  expectDays.setDate(expectDays.getDate() + (280 - props.diffDays));
  const utcDays = expectDays.toUTCString().slice(5, 16);
  const expectArray = utcDays.split(' ');
  const expectMonth = expectArray[1];
  let translatedMonth;

  switch (expectMonth) {
    case 'Jan':
      translatedMonth = 'Janeiro';
      break;
    case 'Feb':
      translatedMonth = 'Fevereiro';
      break;
    case 'Mar':
      translatedMonth = 'Março';
      break;
    case 'Apr':
      translatedMonth = 'Abril';
      break;
    case 'May':
      translatedMonth = 'Maio';
      break;
    case 'Jun':
      translatedMonth = 'Junho';
      break;
    case 'Jul':
      translatedMonth = 'Julho';
      break;
    case 'Aug':
      translatedMonth = 'Agosto';
      break;
    case 'Sep':
      translatedMonth = 'Setembro';
      break;
    case 'Oct':
      translatedMonth = 'Outubro';
      break;
    case 'Nov':
      translatedMonth = 'Novembro';
      break;
    case 'Dec':
      translatedMonth = 'Dezembro';
      break;

    default:
      break;
  }

  expectArray[1] = translatedMonth;
  
  const expectDate = expectArray.join(' ')

  // console.log(translatedMonth)

  return (
    <div className={style.Results}>
      <h1>
        Data provável do Parto:
        <br />
        <span>{expectDate}</span>
      </h1>
    </div>
  );
};

export default ResultEstimate;
