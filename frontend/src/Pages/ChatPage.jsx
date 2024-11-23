/* eslint-disable react-hooks/exhaustive-deps */
import useAuth from '../hooks/useAuth';
import ChatContainer from '../components/Chat/ChatContainer';
import LoginPage from './LoginPage';

const ChatPage = () => {
  const { loggedIn } = useAuth();
  return loggedIn ? <ChatContainer /> : <LoginPage />;
};
export default ChatPage;
