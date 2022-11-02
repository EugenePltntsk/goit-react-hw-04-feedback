import { Statistics } from '../Statistics';
import { Component } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions';
import { Section } from 'components/Section';
import { Notification } from '../Notification';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));

    // one more variant

    // switch (name) {
    //   case 'good':
    //     this.setState(prevState => ({
    //       good: prevState.good + 1,
    //     }));
    //     break

    //   case 'bad':
    //     this.setState(prevState => ({
    //       bad: prevState.bad + 1,
    //     }));
    //     break
    //   case 'neutral':
    //     this.setState(prevState => ({
    //       neutral: prevState.neutral + 1,
    //     }));
    //     break
    //   default:
    //     break;
    // }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Wrapper>
    );
  }
}
