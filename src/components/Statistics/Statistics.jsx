import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  const randomColor = () =>
    '#' + Math.floor(Math.random() * 16777215).toString(16);

  const element = stats.map(stat => (
    <li
      key={stat.id}
      style={{ backgroundColor: randomColor() }}
      className="item"
    >
      <span className="label">{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>{element}</ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
