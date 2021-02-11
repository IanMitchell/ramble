import { useContext } from "react";
import NotificationContext from "../contexts/NotificationContext";

export default function useNotification() {
  const { add } = useContext(NotificationContext);
  return add;
}
