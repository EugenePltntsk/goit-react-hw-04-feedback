import { Statistics } from '../Statistics';
import { useState } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Notification } from '../Notification';
import { Wrapper } from './App.styled';

const options = ["good", "neutral", "bad"]

export const App = () => {
  

const [good, setGood] =useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    const { name } = event.target;

    switch (name) {
      case "good": 
      setGood(prevGood => prevGood +1);
      break;

      case "neutral": 
      setNeutral(prevNeutral => prevNeutral +1);
      break;
      case "bad":
        setBad(prevBad => prevBad +1);
        break;
        default: break;
    }
  
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };
  
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positive={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wrapper>
    );
  }

