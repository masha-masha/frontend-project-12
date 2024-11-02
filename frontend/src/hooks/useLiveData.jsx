import { useGetChannelsQuery } from '../store/api/chatApi';
import defaultChannel from '../utils/defaultChannel';

const useLiveData = (channel) => {
  const { data: channels } = useGetChannelsQuery();
  const checked = channels?.find((c) => c.id === channel.id);
  const activeChannel = checked ? channel : defaultChannel;
  const activeChannelId = activeChannel.id;
  const activeChannelName = checked ? checked.name : defaultChannel.name;
  return { activeChannelId, activeChannelName };
};

export default useLiveData;
