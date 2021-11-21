import { createContext, useState } from 'react';
import axios from 'axios';
import { User, UserLoginData } from "../interfaces/User"
import { Response } from "../interfaces/Response"
import { TokenContext } from './TokenContext';
import Button from '@mui/material/Button';

export default function LoadUsers(this: any) {
    const [token, setToken] = useState<string>("");
    const [users, updateUsers] = useState<User[]>([]);
    const getUsers = async () => {
        try {
            const resp = await axios.get<User[]>("http://localhost:4000/getUsers");
            updateUsers(resp.data);
            console.log(resp);
        } catch (err: any) {
            console.log(err.message);
        }
    };

    const deleteUser = async (user: User) => {
        try {
            const resp = await axios.delete("http://localhost:4000/deleteUser/" + user._id, { headers: { "auth-token": token } });
            // updateList(resp.data.map((user: IUser) => { username: user.username, email: user.email }));
            // hej pontus
            console.log(resp);
            const username = user.username;
            updateUsers(users.filter(item => item.username !== username));
        } catch (err: any) {
            console.log(err);
            alert(err);
        }
    };

    return (
        <div className="wrapper">
            <fieldset>
                <Button variant="outlined" onClick={() => getUsers()}>
                    Load users
                </Button>
                <ul>
                    {users.map((user: User) => (
                        <li key={user._id}>{user.username}
                            <Button variant="outlined" onClick={() => deleteUser(user)}>
                                Delete
                            </Button>
                        </li>
                    ))}
                </ul>
            </fieldset>
        </div >
    );
}