import { useState } from "react";

export const useForm = (initialState) => {
    const [fields, setFields] = useState(initialState);

    const onFieldChange = (fieldName, newValue) => {
        setFields((prev) => {
            return {
                ...prev,
                [fieldName]: newValue
            }
        });
    }
    return {fields, onFieldChange};
}