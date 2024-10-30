import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import filter from 'leo-profanity';
import { activeChannelSelector } from '../../../store/slices/activeChannelSlice';
import MessagesForm from './MessagesForm';
import {
  useGetMessagesQuery,
  useAddMessageMutation,
  useGetChannelsQuery,
} from '../../../store/api/chatApi';
import MessagesBox from './MessagesBox';

const MessagesContainer = () => {
  const defaultChannel = {
    id: '1',
    name: 'general',
    removable: false,
  };
  const prepChannel = useSelector(activeChannelSelector);
  const { data: channels } = useGetChannelsQuery();
  const checked = channels?.find((c) => c.id === prepChannel.id);
  const activeChannel = checked ? prepChannel : defaultChannel;
  const { t } = useTranslation();
  const { data: messages, isLoading } = useGetMessagesQuery();
  const channelId = activeChannel.id;
  const channelName = checked ? { name: checked.name } : { name: defaultChannel.name };
  const channelMessages = messages?.filter((message) => message.channelId === channelId);
  const count = channelMessages?.length || 0;
  const [addMessage] = useAddMessageMutation();
  const username = localStorage.getItem('username');

  return (
    <div className="col p-0 h-100">
      <div className="d-flex flex-column h-100">
        <div className="bg-light mb-4 p-3 shadow-sm small">
          <p className="m-0">
            <b>{`# ${filter.clean(channelName.name)}`}</b>
          </p>
          <span className="text-muted">{t('chatBox.messages', { count })}</span>
        </div>
        <MessagesBox channelMessages={channelMessages} filter={filter} />
        <div className="mt-auto px-5 py-3">
          <MessagesForm
            channelId={channelId}
            username={username}
            addMessage={addMessage}
            isLoading={isLoading}
            t={t}
          />
        </div>
      </div>
    </div>
  );
};

export default MessagesContainer;
