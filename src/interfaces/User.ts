export interface User {
    _id?: string;
    username: string;
    email: string;
};

export interface UserLoginData extends User {
    password: string;
};