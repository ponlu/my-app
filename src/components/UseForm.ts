import { useState } from "react";

// useForm functional componen
export const useForm = <T>(callback: any, initialState = {} as T) => {
    const [values, setValues] = useState<T>(initialState);

    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };


    // onSubmit
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback(values); // triggering the callback
    };

    // return values
    return {
        onChange,
        onSubmit,
        values,
    };
}