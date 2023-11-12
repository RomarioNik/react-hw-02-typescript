// styled
import {
  FeedbackList,
  FeedbackItem,
  FeedbackCount,
  FeedbackCountList,
  FeedbackCountItem,
  TextTotalCount,
} from "./Statistics.styled";
// types
import { IStatisticsProps } from "./Statistics.types";

export const Statistics: React.FC<IStatisticsProps> = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <FeedbackList>
        <FeedbackItem>
          <FeedbackCount>{good}</FeedbackCount>
        </FeedbackItem>
        <FeedbackItem>
          <FeedbackCount>{neutral}</FeedbackCount>
        </FeedbackItem>
        <FeedbackItem>
          <FeedbackCount>{bad}</FeedbackCount>
        </FeedbackItem>
      </FeedbackList>

      <FeedbackCountList>
        <FeedbackCountItem>
          <TextTotalCount>Total Feedback: {total}</TextTotalCount>
        </FeedbackCountItem>
        <FeedbackCountItem>
          <TextTotalCount>
            Positive Feedback Percentage: {positivePercentage}%
          </TextTotalCount>
        </FeedbackCountItem>
      </FeedbackCountList>
    </>
  );
};
