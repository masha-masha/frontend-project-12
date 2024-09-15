import RegistrationForm from "../PagesComponents/RegistrationForm";
import Image from "../PagesComponents/Image";
import Container from "../PagesComponents/Container";
import avatar from "../../assets/avatar.jpg";

export const SignUpPage = () => {
  return (
    <Container>
      <div class="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
        <Image image={avatar}/>
        <RegistrationForm/>
      </div>
    </Container>
  );
};
