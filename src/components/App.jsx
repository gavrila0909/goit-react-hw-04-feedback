import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import SectionTitle from './SectionTitle';
import Notification from './Notification';
import styles from './App.module.css';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const [feedbackCollected, setFeedbackCollected] = useState(false);

  //Functia initial nu stie cine este OPTION,va afla cand va fi invocata.
  const handleFeedback = option => {
    setFeedback(prevOption => ({
      ...prevOption,
      [option]: prevOption[option] + 1,
    }));
    setFeedbackCollected(true);
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = feedback;
    const total = countTotalFeedback();
    const positiveFeedbackPercentage = (good / total) * 100;
    return Math.round(positiveFeedbackPercentage);
  };

  const total = countTotalFeedback();

  return (
    <>
      <div className={styles.container}>
        <SectionTitle title="Please leave feedback here" />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback} //fac referinta catre functie
        />
        <SectionTitle title="Statistics" />
        {!feedbackCollected && <Notification message="There is no feedback" />}
        {feedbackCollected && (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    </>
  );
};

export default App;
