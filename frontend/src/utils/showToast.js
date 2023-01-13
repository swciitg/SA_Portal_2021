import React from "react";
import toast from "react-hot-toast";
import close from "../assets/close-icon.png";

const validatedType = (type) => {
  const types = ["success", "error", "loading", "custom", "promise"];
  return types.includes(type);
};

const CustomMsg = (t, { msg, includeDismiss }) => {
  return (
    <div className="flex justify-center items-center">
      <span>{msg}</span>
      {includeDismiss && (
        <button
          onClick={() => toast.dismiss(t.id)}
          className="ml-2"
          style={{ width: "12px", height: "12px", minWidth:"12px" }}
        >
          <img src={close} alt="dismiss" />
        </button>
      )}
    </div>
  );
};

const showToast = ({
  msg = "Empty Message",
  type = "success",
  duration = 2000,
  position = "top-center",
  includeDismiss = false,
}) =>
  validatedType(type)
    ? toast[type]((t) => CustomMsg(t, { msg, includeDismiss }), {
        duration,
        position,
        ...(includeDismiss && {icon: null}),
      })
    : toast(msg);

export default showToast;
