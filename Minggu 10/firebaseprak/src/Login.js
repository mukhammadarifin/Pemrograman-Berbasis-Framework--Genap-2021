import React, {useState, useContext} from "react";
import {AuthContext} from "./index";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const handleForm = e => {
        e.preventDefault();
        console.log(Auth);
        Auth.setLoggedIn(true);
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <input
                    onChange={e => setPasword(e.target.value)}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="password"
                />
                <hr />
                <buton class="googleBtn" type="button">
                    <img
                        src="https:upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="logo"
                    />
                    Login With Google
                </buton>
                <button type="submit">Login</button>
                <span>{error}</span>
            </form>
        </div>
    );
};

export default Login;