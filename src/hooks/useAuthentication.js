import { useDispatch, useSelector } from "react-redux";
import { selectAuthStatus } from "../store/slices/authentication/selectors";
import { useForm } from "./useForm";
export const useAuthentication = (initialState, asyncAction) => {

    const {fields, onFieldChange} = useForm(initialState);

    const dispatch = useDispatch();
    const status = useSelector(selectAuthStatus);


    const onSendForm = (e) => {
        e.preventDefault();
        dispatch(asyncAction(fields));
      }

    return {fields, onFieldChange, onSendForm, status};
}