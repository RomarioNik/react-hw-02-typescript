import { IState } from "../App.tyles";

export interface IFeedbackOptionsProps {
  options: string[];
  onLeaveFeedback: (nameButton: keyof IState) => void;
}
