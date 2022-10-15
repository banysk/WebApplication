import React, { useState, useMemo } from "react"
import RoleType from "../enums/RoleType"
import AuthInfo from "../objects/AuthInfo"
import AuthInput from "../objects/AuthInput"
import authRepository from "../repositories/AuthRepository"

interface IAuthContext {
    // Авторизован ли пользователь
    isAuthenticated: boolean,
    // Роль пользователя
    role: RoleType,
    // Авторизация
    login: (login: string, password: string) => void
    // Выход
    logout: () => void
}

export const AuthContext = React.createContext<IAuthContext>({
    isAuthenticated: false,
    role: RoleType.Undefined,
    login(login: string, password: string) {
        throw Error("Отсутствует реализация метода")
    },
    logout() {
        throw Error("Отсутствует реализация метода")
    },
})

export const AuthContextProvider = ({children}: any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState(RoleType.Undefined);

    authRepository.getInfo()
                  .then((data) => setState(data));


    const setState = (authInfo: AuthInfo) => {
        setIsAuthenticated(authInfo.isAuthenticated);
        setRole(authInfo.role);
    }

    const login = async (login: string, password: string): Promise<void> => {
        let authInput: AuthInput = {
            login: login,
            password: password
        }

        let data = await authRepository.login(authInput);
        setState(data); 
    }

    const logout = async (): Promise<void> => {
        let data = await authRepository.logout();
        setState(data);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, role, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}