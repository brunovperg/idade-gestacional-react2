import { useState } from 'react';
import ResultAge from '../ResultAge';
import style from './Form.module.scss';
import ResultEstimate from '../ResultEstimate';

const Form = () => {
  const [choice, setChoice] = useState('');
  const [date, setDate] = useState('');
  const [days, setDays] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [diffDays, setDiffDays] = useState(0);
  const today = new Date().toDateString();
  const todayTime = new Date(today).getTime();
  const formDay = new Date(date).toUTCString();
  const formDayTime = new Date(formDay).getTime();
  const daysDifference = Math.floor(
    (todayTime - formDayTime) / (24 * 60 * 60 * 1000) + (weeks * 7 + days)
  );

  const handleFocus = (e) => e.target.select()

  return (
    <>
      <form
        className={style.Form}
        onSubmit={(e) => e.preventDefault() & setDiffDays(daysDifference)}>
        <h1>Calculadora Idade Gestacional</h1>
        <div className={style.Choice}>
          <label>
            <input
              type='radio'
              name='toggle'
              className='menst'
              onChange={(e) =>
                setChoice(e.target.className) &
                setDays(0) &
                setWeeks(0) &
                setDiffDays(0)
              }
            />
            <span>Última menstruação</span>
          </label>
          <label>
            <input
              type='radio'
              name='toggle'
              className='ultra'
              onChange={(e) => setChoice(e.target.className) & setDiffDays(0)}
            />
            <span>Ultrassom</span>
          </label>
        </div>

        {choice && (
          <>
            <label>
              Selecione a data {choice === 'menst' ? ' da' : ' do'}
              <strong>
                {choice === 'menst' ? ' Última Menstruação' : ' Ultrassom'}
              </strong>
            </label>
            <input
              type='date'
              value={date}
              className={style.Date}
              onChange={(e) => setDate(e.target.value)}
            />

            {choice === 'ultra' && (
              <div className={style.UltraDays}>
                <span>No ultrassom a gestação tinha:</span>
                <div>
                  <label>
                    <input
                      type='number'
                      className='weeks'
                      onFocus={handleFocus}
                      value={weeks}
                      onChange={(e) => setWeeks(Number(e.target.value))}
                    />
                    Semanas e
                  </label>
                  <label>
                    <input
                      type='number'
                      className='days'
                      onFocus={handleFocus}
                      value={days}
                      onChange={(e) => setDays(Number(e.target.value))}
                    />
                    Dias
                  </label>
                </div>
              </div>
            )}
            <button className={style.Button}>Calcular</button>
          </>
        )}
      </form>
      {diffDays > 0 && (
        <>
          <ResultAge diffDays={diffDays} />
          <ResultEstimate diffDays={diffDays} />
        </>
      )}
    </>
  );
};
export default Form;
