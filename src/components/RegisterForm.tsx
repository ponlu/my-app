import { useState } from 'react';
import axios from 'axios';
import { User, UserLoginData } from "../interfaces/User"
import { Response } from "../interfaces/Response"
import { useForm } from "./UseForm"
import Button from '@mui/material/Button';

export default function RegisterForm(this: any) {
    const register = async (values: User) => {
        try {
            const userLoginData: UserLoginData = {
                username: registerForm.values.username,
                password: registerForm.values.password,
                email: registerForm.values.email
            };
            const resp = await axios.post<User>("http://localhost:4000/register", userLoginData);

            console.log(resp);
        } catch (err: any) {
            console.log(err.message);
        }
    };

    const registerForm = useForm(
        register,
        { username: "", password: "", email: "" }
    );

    return (
        <div className="wrapper">
            <fieldset>
                <form onSubmit={registerForm.onSubmit}>
                    <label>
                        <p>Username</p>
                        <input name="username" onChange={registerForm.onChange} />
                        <p>Email</p>
                        <input name="email" onChange={registerForm.onChange} />
                        <p>Password</p>
                        <input name="password" onChange={registerForm.onChange} />
                    </label>
                    <Button variant="outlined" type="submit">Register</Button>
                </form>
            </fieldset>
        </div>
    );
}