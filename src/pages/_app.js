import "@/styles/globals.css";

import { useRouter } from "next/router";
import { firebaseApp } from "@/Config/firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

import NavbarComponent from "@/Components/navbar";
import Dashboard from "@/Container/dashboard";

export default function App({ Component, pageProps }) {
  const auth = getAuth(firebaseApp);
  const currentUser = auth.currentUser;
  const router = useRouter();
  const [user, setUser] = useState();

  useEffect(() => {
    if (!currentUser) {
      router.replace("/login");
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        if (
          router.asPath.includes("/login") ||
          router.asPath.includes("/signIn")
        ) {
          router.replace("/");
        }
      } else {
        setUser();
        router.replace("/login");
      }
    });

    return () => unsubscribe();
  }, [currentUser]);

  return !currentUser ? (
    <Component firebaseUser={user} currentUser={currentUser} {...pageProps} />
  ) : (
    <>
      <NavbarComponent />
      <Dashboard />
    </>
  );
}
