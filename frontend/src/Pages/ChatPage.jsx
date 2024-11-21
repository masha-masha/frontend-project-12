/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatContainer from '../components/Chat/ChatContainer';

const ChatPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, []);
  return (
    <ChatContainer />
  );
};
export default ChatPage;
