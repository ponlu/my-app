import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import LoadUsers from './LoadUsers';
import { SetStateAction, useState } from 'react';

export default function Table(this: any) {
    const [token, setToken] = useState<string>("");

    return (
        <div className="App" >
            <RegisterForm />
            <LoginForm />
            <LoadUsers />
        </div >
    );
}