import { IState } from "../App.tyles";

export interface IStatisticsProps extends IState {
  total: number;
  positivePercentage: number;
}
