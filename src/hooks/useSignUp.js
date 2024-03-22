import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectAuthStatus, signUpUser } from "../store/slices/authSlice";

export const useSignUp = (initialState = null) => {
    const [fields, setFields] = useState(initialState || {
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const status = useSelector(selectAuthStatus);

    const onFieldChange = (fieldName, newValue) => {
        setFields((prev) => {
            return {
                ...prev,
                [fieldName]: newValue
            }
        });
    }

    const onSendForm = (e) => {
        e.preventDefault();
        console.log(fields);
        dispatch(signUpUser(fields));
      }

    return {fields, onFieldChange, onSendForm, status};
}