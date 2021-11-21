import { createContext, useState } from "react";

const [token, setToken] = useState<string>("");

interface ITokenContext {
    token: string,
    setToken: React.Dispatch<React.SetStateAction<string>>
}
export const TokenContext = createContext<ITokenContext>({ token: token, setToken: setToken });