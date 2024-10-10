import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ChatContainer from '../PagesComponents/Chat/ChatContainer';

export const ChatPage = () => {
  const navigate = useNavigate(); 

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (!token) {
      navigate('/login');
    }
  }, );
  return (
    <ChatContainer/>
  );
};


