import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = props => {
  return (
    <ul className={css.statList}>
      {Object.keys(props).map(key => (
        <li key={key} className={css.statItem}>
          {key}: {props[key]}
        </li>
      ))}
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

/* //   <li className={css.statItem}> Good: {good} </li>
//   <li className={css.statItem}> Neutral: {neutral}</li>
//   <li className={css.statItem}> Bad: {bad}</li>
//   <li className={css.statItem}> Total: {total}</li>
//   <li className={css.statItem}> Bad: {positivePercentage}%</li>
// </ul> */
