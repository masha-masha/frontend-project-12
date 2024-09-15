import { Link } from "react-router-dom";
import office from "../../assets/dw.jpg";
import Image from "../PagesComponents/Image";
import LoginForm from "../PagesComponents/LoginForm";
import routes from "../../utils/routes";
import Container from "../PagesComponents/Container";


export const LoginPage = () => {
  

  return (
    <Container>
      <div className="card-body row p-5">
        <Image image={office} />
        <LoginForm/>
      </div>
      <div className="card-footer p-4">
        <div className="text-center">
          <span>Нет аккаунта? </span>
          <Link to={routes.signUpPagePath()}>Регистрация</Link>
        </div>
      </div>
    </Container>
  );
};
