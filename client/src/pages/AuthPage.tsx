import { useState } from "react";
import AuthenticationForm from "../components/AuthenticationForm";

const AuthPage = () => {
    const [isAuthPage, setIsAuthPage] = useState(true);

    return (
        <AuthenticationForm/>
    )
}

export default AuthPage;