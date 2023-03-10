import { firebaseApp } from "@/Config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseAuth = getAuth(firebaseApp);

export const loginUser = ({ email, password }) => {
  signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const signInUser = (credentials) => {
  createUserWithEmailAndPassword(firebaseAuth, credentials)
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message);
    });
};
