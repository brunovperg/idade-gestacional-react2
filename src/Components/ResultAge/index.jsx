/* eslint-disable react/prop-types */
import style from './ResultAge.module.scss';

const ResultAge = (props) => {
  console.log;
  const semanas = Math.floor(props.diffDays / 7);
  const dias = props.diffDays % 7;

  return (
    <div className={style.Results}>
      <h1>
        Idade Gestacional:
        <br />
        <span>
          {semanas} {semanas == 1 ? 'semana' : 'semanas'} e {dias}{' '}
          {dias == 1 ? 'dia' : 'dias'}
        </span>
      </h1>
    </div>
  );
};

export default ResultAge;
