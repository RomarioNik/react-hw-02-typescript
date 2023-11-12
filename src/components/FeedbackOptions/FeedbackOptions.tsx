import { ButtonList, ButtonListItem, Button } from "./FeedbackOptions.styled";
import { firstLetterToUpperCase } from "../../utils";
// types
import { IFeedbackOptionsProps } from "./FeedbackOptions.types";
import { IState } from "../App.tyles";

export const FeedbackOptions: React.FC<IFeedbackOptionsProps> = ({
  options,
  onLeaveFeedback,
}) => {
  return (
    <ButtonList>
      {options.map((nameButton) => (
        <ButtonListItem key={nameButton}>
          <Button
            type="button"
            onClick={() => onLeaveFeedback(nameButton as keyof IState)}
          >
            {firstLetterToUpperCase(nameButton)}
          </Button>
        </ButtonListItem>
      ))}
    </ButtonList>
  );
};
