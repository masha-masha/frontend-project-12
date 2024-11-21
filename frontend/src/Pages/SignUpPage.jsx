import RegistrationForm from '../components/PagesComponents/RegistrationForm';
import Image from '../components/PagesComponents/Image';
import Container from '../components/PagesComponents/Container';
import registration from '../assets/registration.jpg';

const SignUpPage = () => (
  <Container>
    <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
      <Image image={registration} />
      <RegistrationForm />
    </div>
  </Container>
);

export default SignUpPage;
