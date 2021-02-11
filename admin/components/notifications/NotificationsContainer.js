import React, { useState } from "react";
import Notification from "./Notification";
import NotificationContext from "../../../contexts/NotificationContext";
import useCounter from "../../../hooks/useCounter";

export default function NotificationContainer({ children }) {
  const { value: keyCount, increment } = useCounter(0);
  const [notifications, setNotifications] = useState([]);

  const clearNotifications = () => setNotifications([]);

  const removeNotification = (notification) => {
    setNotifications((value) => value.filter((item) => item !== notification));
  };

  const addNotification = (data) => {
    const notification = {
      ...data,
      key: keyCount,
    };

    increment();
    setNotifications((value) => [...value, notification]);
  };

  return (
    <NotificationContext.Provider
      value={{
        add: addNotification,
        remove: removeNotification,
        clear: clearNotifications,
      }}
    >
      {notifications.length > 0 && (
        <div className="fixed z-20 inset-0 flex flex-col items-end justify-center px-4 py-6 pointer-events-none sm:justify-end sm:p-6">
          {notifications.map((notification) => (
            <Notification
              key={notification.key}
              title={notification.title}
              icon={notification.icon}
              onClose={() => removeNotification(notification)}
              content={notification.content}
              timeout={notification.timeout}
            />
          ))}
        </div>
      )}
      {children}
    </NotificationContext.Provider>
  );
}
