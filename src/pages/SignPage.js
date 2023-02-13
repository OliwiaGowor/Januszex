import React from "react";
import LoginForm from "../components/LoginForm";
import PageNav from "../components/Navbar";
import { Link, useSearchParams } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import classes from "./SignPage.module.css";

function SignPage() {

    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';

    return (
        <div className={classes.signPage}>
            <PageNav />
            {isLogin ? <LoginForm method="POST" /> : <SignUpForm method="POST" />}
            <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
                {isLogin ? 'Nie masz jeszcze konta? Kliknij tu i zarejestruj się!' : 'Masz już konto? Kliknij tu i się zaloguj!'}
            </Link>
        </div>
    );
}

export default SignPage;