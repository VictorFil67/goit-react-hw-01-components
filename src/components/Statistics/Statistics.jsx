import s from './Statistics.module.css';
import { getRandomBgColor } from 'helpers/getRamdomBgColor.js';
// const bgColor = getRandomBgColor();
export const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : null}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          const { red, green, blue } = getRandomBgColor();
          return (
            <li
              className={s.item}
              key={id}
              style={{
                backgroundColor: `rgb(${red},${green},${blue})`,
              }}
            >
              <span className={s.label}>{label} </span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
