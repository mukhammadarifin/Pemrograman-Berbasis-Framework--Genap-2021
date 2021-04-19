import React, { useState, useContext } from "react";
import { AuthContext } from "./index";
import firebase from "firebase";
import googleSignin from "./googleSignin";

const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) Auth.setLoggedIn(true);
      })
      .catch((e) => {
        setErrors(e.message);
      });

    // console.log(Auth);
    // Auth.setLoggedIn(true);
  };

  return (
    <div>
      <h1>Join</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
          type="password"
          placeholder="password"
        />
        <hr />
        <button class="googleBtn" type="button" onClick={googleSignin}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="logo"
          />
          Join With Google
        </button>
        <button type="submit">Join</button>
        <span>{error}</span>
      </form>
    </div>
  );
};

export default Join;
