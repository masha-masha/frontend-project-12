import { useSelector } from "react-redux";
import { activeChannelSelector } from "../../../store/slices/activeChannelSlice";
import MessagesForm from "./MessagesForm";
import {
  useGetMessagesQuery,
  useAddMessageMutation,
} from "../../../store/api/chatApi";
import MessagesBox from "./MessagesBox";

const MessagesContainer = () => {
  const activeChannel = useSelector(activeChannelSelector);
  const channelId = activeChannel.id;

  const { data: messages } = useGetMessagesQuery();
  const channelMessages = messages?.filter(
    (message) => message.channelId === channelId
  )
  const countOfmessages = channelMessages?.length || 0;
  const [addMessage] = useAddMessageMutation();
  const username = localStorage.getItem("username");

  return (
    <div className='col p-0 h-100'>
      <div className='d-flex flex-column h-100'>
        <div className='bg-light mb-4 p-3 shadow-sm small'>
          <p className='m-0'>
            <b>{`# ${activeChannel.name}`}</b>
          </p>
          <span className='text-muted'>{countOfmessages} сообщ.</span>
        </div>
        <MessagesBox channelMessages={channelMessages} />
        <div className='mt-auto px-5 py-3'>
          <MessagesForm
            channelId={channelId}
            username={username}
            addMessage={addMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default MessagesContainer;
