import RegistrationForm from '../PagesComponents/RegistrationForm';
import Image from '../PagesComponents/Image';
import Container from '../PagesComponents/Container';
import registration from '../../assets/registration.jpg';

const SignUpPage = () => (
  <Container>
    <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
      <Image image={registration} />
      <RegistrationForm />
    </div>
  </Container>
);

export default SignUpPage;
