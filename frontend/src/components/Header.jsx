import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../Redux/auth/authSelectors";
import Logout from "./Logout/Logout";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className="header">
      <NavLink to="/">
        <img className="header-logo" src="/SlimMom/logo.svg" alt="logo" />
      </NavLink>
      {isLoggedIn ? (
        <>
          <div>
            {" "}
            <NavLink to="/calculator">CALCULATOR</NavLink>
            <NavLink to="/diary">DIARY</NavLink>
          </div>

          <Logout />
        </>
      ) : (
        <>
          <NavLink to="/login">LOG IN</NavLink>
          <NavLink to="/register">REGISTER</NavLink>
        </>
      )}
    </nav>
  );
};

export default Header;
