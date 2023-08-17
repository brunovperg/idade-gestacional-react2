/* eslint-disable react/prop-types */
import style from './ResultEstimate.module.scss';

const ResultEstimate = (props) => {
  const expectDays = new Date();
  expectDays.setDate(expectDays.getDate() + (280 - props.diffDays));
  const utcDays = expectDays.toUTCString().slice(4, 16);

  return (
    <div className={style.Results}>
      <h1>
        Data provável do Parto:
        <br />
        <span>{utcDays}</span>
      </h1>
    </div>
  );
};

export default ResultEstimate;
