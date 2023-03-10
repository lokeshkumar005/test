import style from "./signIn.module.css";
import { signInUser } from "@/Apis/auth";
import { useState } from "react";

import { firebaseApp } from "@/Config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

const SignInPage = () => {
  // const [credentials, setCredentials] = useState({
  //   email: "",
  //   password: "",
  // });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (e) => {
    const res = e.target.value;
    setEmail(res);
  };
  const passChange = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };

  const firebaseAuth = getAuth(firebaseApp);

  // const onChange = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email;
  //   const password = e.target.password;

  //   setCredentials(email, password);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // signInUser({
    //   email: credentials.email,
    //   password: credentials.password,
    // });
    await createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });

    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className={style.SignIn}>
        <form onSubmit={handleSubmit} className={style.SignIn__content}>
          <h1 className={style.SignIn__heading}>Sign In</h1>

          {/* <input onChange={userChange} type="username" placeholder="Username" /> */}
          <input onChange={emailChange} type="email" placeholder="Email" />
          <input onChange={passChange} type="password" placeholder="Password" />

          <button>Sign in</button>

          <Link className={style.SignIn__footerLink} href="/login">
            Already have account !
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignInPage;
