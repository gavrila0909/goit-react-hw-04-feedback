import React from 'react';
import styles from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';



function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
      <div className={styles.feedbackButtons}>
        {options.map(option => (
          <button key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  }
  

  FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.string.isRequired
      ).isRequired
  };
  
  export default FeedbackOptions;
