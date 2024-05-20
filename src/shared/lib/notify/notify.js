import { STATUS } from "app/store/slices/config";
import { toast } from "react-toastify";

export const notify = (message, status = STATUS.SUCCEEDED) => {
    switch(status) {
        case STATUS.SUCCEEDED: toast.success(message);
            break;
        case STATUS.FAILED: toast.error(message);
    }
} 