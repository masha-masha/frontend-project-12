import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Container from '../PagesComponents/Chat/Container';

export const HomePage = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (!token) {
      navigate('/login');
    }
  }, );
  return (
    <Container/>
  );
};


