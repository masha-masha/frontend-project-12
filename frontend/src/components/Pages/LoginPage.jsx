import { Link } from "react-router-dom";
import authorization from "../../assets/authorization.jpg";
import Image from "../PagesComponents/Image";
import LoginForm from "../PagesComponents/LoginForm";
import routes from "../../utils/routes";
import Container from "../PagesComponents/Container";

export const LoginPage = () => {
  return (
    <Container>
      <div className='card-body row p-5'>
        <Image image={authorization} />
        <LoginForm />
      </div>
      <div className='card-footer p-4'>
        <div className='text-center'>
          <span>Нет аккаунта? </span>
          <Link to={routes.signUpPagePath()}>Регистрация</Link>
        </div>
      </div>
    </Container>
  );
};
