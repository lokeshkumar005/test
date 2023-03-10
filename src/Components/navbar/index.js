import style from "./navbar.module.css";
import { IoMdLogOut } from "react-icons/Io";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "@/Config/firebase";

function NavbarComponent() {
  const auth = getAuth(firebaseApp);

  const logoutUser = () => {
    return auth.signOut();
  };

  const currentUser = auth.currentUser;

  return (
    <div className={style.navbar}>
      <div className={style.navbar_container}>
        <div className={style.navbar_logo}>Audio to Text Convertor</div>
        <div className={style.navbar_search}>
          <input
            type="text"
            className={style.navbar_searchInput}
            placeholder="Search"
          />
          <button className={style.navbar_searchButton}>Search</button>
          {currentUser && (
            <span onClick={logoutUser} className={style.navbar_profile}>
              <IoMdLogOut />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
