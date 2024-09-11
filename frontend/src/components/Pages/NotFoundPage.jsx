import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import notFoundImage from "../../assets/page404.svg";

export const NotFoundPage = () => {
  return (
    <div class="text-center mt-5">
      <img
        src={notFoundImage}
        alt="Страница не найдена"
        className="img-fluid h-25"
        width={300}
      />
      <h1 className="h4 text-muted">Страница не найдена</h1>
      <p>
        "Но вы можете перейти "<Link to={routes.mainPagePath()}>на главную страницу</Link>
      </p>
    </div>
  );
};
