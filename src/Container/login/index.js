import style from "./login.module.css";

import { firebaseApp } from "@/Config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebaseAuth = getAuth(firebaseApp);

  const emailChange = (e) => {
    const res = e.target.value;
    setEmail(res);
  };
  const passChange = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <div className={style.Login}>
        <form className={style.Login__content}>
          <h1 className={style.Login__heading}>LogIn</h1>

          <input onChange={emailChange} type="email" placeholder="Email" />
          <input onChange={passChange} type="password" placeholder="Password" />

          <button onClick={handleSubmit}>Log in</button>

          <p className={style.Login__footer}>
            New user?{" "}
            <Link className={style.Login__footerLink} href="/signIn">
              Sign up here
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
