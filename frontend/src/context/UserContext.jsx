import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {

        const usuarioGuardado = localStorage.getItem("user");

        if (usuarioGuardado) {

            setUser(JSON.parse(usuarioGuardado));

        }

    }, []);

    const login = (usuario, token) => {

        localStorage.setItem("token", token);

        localStorage.setItem("user", JSON.stringify(usuario));

        setUser(usuario);

    };

    const logout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        setUser(null);

    };

    return (

        <UserContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >

            {children}

        </UserContext.Provider>

    );

}

export const useUser = () => useContext(UserContext);