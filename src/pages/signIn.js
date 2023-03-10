import React from "react";
import SignInPage from "@/Container/Signin";
import NavbarComponent from "@/Components/navbar";

const signIn = () => {
  return (
    <div>
      <NavbarComponent />
      <SignInPage />
    </div>
  );
};

export default signIn;
