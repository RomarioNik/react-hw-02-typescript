import { useState } from "react";
// components
import { FeedbackOptions } from "./FeedbackOptions";
import { Section } from "./Section";
import { Statistics } from "./Statistics";
import { Notification } from "./Notification";
// styles
import { Container } from "./App.style";
// types
import { IState } from "./App.tyles";

const rewievs: IState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const [state, setState] = useState<IState>(rewievs);
  const { good, neutral, bad } = state;

  const addFeedback = (nameButton: keyof IState): void => {
    setState(
      (prevState) =>
        ({
          ...prevState,
          [nameButton]: prevState[nameButton] + 1,
        } as unknown as IState)
    );
  };

  const countTotalFeedback = (): number => {
    return Object.values(state).reduce((total, el) => {
      return (total = total + el);
    }, 0);
  };

  const countPositiveFeedbackPercentage = (): number => {
    const totalFeedbacks = countTotalFeedback();

    if (totalFeedbacks === 0) {
      return 0;
    }

    const percentageCount = (good * 100) / totalFeedbacks;
    return Number(percentageCount.toFixed());
  };

  return (
    <Container>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={Object.keys(state)}
          onLeaveFeedback={addFeedback}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
