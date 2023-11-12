// styled
import { Title } from "./Notification.styled";
// types
import { INotificationProps } from "./Notification.types";

export const Notification: React.FC<INotificationProps> = ({ message }) => {
  return <Title>{message}</Title>;
};
