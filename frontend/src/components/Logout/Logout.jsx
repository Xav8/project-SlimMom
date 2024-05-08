import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/auth/authOperations";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../Redux/auth/authSelectors";
import styles from "./Logout.module.css";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser);
  const email = user ? user.email : null;
  const username = typeof email === "string" ? email.split("@")[0] : "Guest";

  return (
    <div className={styles.container}>
      <p className={styles.title}>{username}</p>
      <button
        className={styles.button}
        onClick={() => {
          dispatch(logoutUser());
          navigate("/login");
        }}
      >
        Exit
      </button>
    </div>
  );
};

export default Logout;
