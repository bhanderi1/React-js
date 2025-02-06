import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure()
const Toast_notifications = () => {
  const showToast = () => {
    toast("Toast Example");
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <ToastContainer
        position={"bottom-right"}
        closeOnClick={true}
        pauseOnHover={false}
        pauseOnFocusLo={false}
        autoClose={false}
        draggable={true}
        closeButton={<p>Close</p>}
        icon={""}
      />
    </div>
  );
};

export default Toast_notifications;
