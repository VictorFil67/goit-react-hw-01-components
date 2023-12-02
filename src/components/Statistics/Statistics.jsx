import s from './Statistics.module.css'
import { getRandomBgColor } from 'helpers/getRamdomBgColor.js';
// const bgColor = getRandomBgColor();
export const Statistics = ({title, stats}) => {
  
  // const { red, green, blue } = getRandomBgColor();
    return (
        <section className={s.statistics}>
  {title?<h2 className={s.title}>{title}</h2>:null}

  <ul className={s.statList}>
    {stats.map(item => (
        <li className={s.item} key={item.id} style={{ backgroundColor: `rgb(${getRandomBgColor().red},${getRandomBgColor().green},${getRandomBgColor().blue})` }}>
        <span className={s.label}>{item.label} </span>
        <span className={s.percentage}>{item.percentage}%</span>
      </li>
    ))}
  </ul>
</section>
    );
};