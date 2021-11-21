import { SetStateAction, useContext, useState } from 'react';
import axios from 'axios';
import { User, UserLoginData } from "../interfaces/User"
import { Response } from "../interfaces/Response"
import { useForm } from "./UseForm"
import Button from '@mui/material/Button';

export default function LoginForm(setToken: React.Dispatch<SetStateAction<string>>) {
    // const [token, setToken] = useState<string>("");
    // const { token, setToken } = useContext(TokenContext);

    const login = async () => {
        try {
            const { username, email, password } = loginForm.values;
            const userLoginData: UserLoginData = { username: username, email: email, password: password };
            const resp = await axios.post<Response<User>>("http://localhost:4000/login", userLoginData);
            setToken(resp.data.token);

            alert(resp.data.token);
            console.log(resp);
        } catch (err: any) {
            alert(err.message);
        }
    };

    const loginForm = useForm(
        login,
        { username: "", password: "", email: "" }
    );

    return (
        <div className="wrapper">
            <fieldset>
                <form onSubmit={loginForm.onSubmit}>
                    <label>
                        <p>Username</p>
                        <input name="username" onChange={loginForm.onChange} />
                        <p>Password</p>
                        <input name="password" onChange={loginForm.onChange} />
                    </label>
                    <Button variant="outlined" type="submit">Login</Button>
                </form>
            </fieldset>
        </div>
    );
}