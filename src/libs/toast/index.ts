import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const Toast = (type: "success" | "error" | "info", message: string) => {
  const progressColorClass = `progress-${type}`;

  toast(message, {
    type,
    className: "toast-container, commit용", // 향후 commit용 제거
    progressClassName: progressColorClass,
  });
};

export { Toast };