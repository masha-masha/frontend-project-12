import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import useAuth from "../../hooks/useAuth";

const MainNavigation = () => {
  const auth = useAuth();
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <span className="navbar-brand"> Hexlet Chat </span>
        {auth.loggedIn? (
         <Link
         onClick={() => auth.logOut()}
         to={routes.loginPagePath()}
         type="button"
         className="btn btn-primary"
       >
         Выйти
       </Link>
        ) : null}
        
      </div>
    </nav>
  );
};

export default MainNavigation;
