import React, { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import SectionTitle from './SectionTitle';
import Notification from './Notification';
import styles from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
      feedbackCollected: false,
    };
  }
  //const [ good, setGoodFeedback] = useState(0);   onClick={() => setGoodFeedback(good + 1)}
  //const [ neutral, setNeutralFeedback] = useState(0);   onClick={() => setNeutralFeedback(neutral + 1)}
  //const [ bad, setBadFeedback] = useState(0);    onClick={() => setBadFeedback(bad + 1)}

  // handleGoodFeedback = () => {this.setState({ good: this.state.good + 1 });};    <button onClick={this.handleGoodFeedback}>Good</button>
  // handleNeutralFeedback = () => {this.setState({ neutral: this.state.neutral + 1 });};
  // handleBadFeedback = () => {this.setState({ bad: this.state.bad + 1 });};

  //Functia initial nu stie cine este OPTION,va afla cand va fi invocata.
  handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
      feedbackCollected: true,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    let positiveFeedbackPercentage = 0;

    if (total > 0) {
      positiveFeedbackPercentage = (good / total) * 100;
    }

    return Math.round(positiveFeedbackPercentage);
  };
  render() {
    return (
      <>
        <div className={styles.container}>
          <SectionTitle title="Please leave feedback here" />

          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback} //fac referinta catre functie
          ></FeedbackOptions>

          <SectionTitle title="Statistics" children=''/>
          {!this.state.feedbackCollected && (
            <Notification message="There is no feedback" />
          )}
          {this.state.feedbackCollected && (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </div>
      </>
    );
  }
}
export default App;
