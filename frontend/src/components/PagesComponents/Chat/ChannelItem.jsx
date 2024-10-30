import { useSelector, useDispatch } from 'react-redux';
import filter from 'leo-profanity';
import {
  setActiveChannel,
  activeChannelSelector,
} from '../../../store/slices/activeChannelSlice';
import {
  useGetChannelsQuery,
} from '../../../store/api/chatApi';

const ChannelItem = ({ channel }) => {
  const activeChannel = useSelector(activeChannelSelector);
  const { data: channels } = useGetChannelsQuery();
  const checked = channels?.find((c) => c.id === activeChannel.id);
  const cheked = checked ? activeChannel.id : '1';
  const dispatch = useDispatch();
  const classes = channel.id === cheked
    ? 'w-100 rounded-0 text-start btn btn-secondary'
    : 'w-100 rounded-0 text-start btn';
  const handleSetActiveChannel = (currentChannel) => {
    dispatch(setActiveChannel(currentChannel));
  };
  return (
    <button
      type="button"
      className={classes}
      onClick={() => handleSetActiveChannel(channel)}
    >
      <span className="me-1">#</span>
      {filter.clean(channel.name)}
    </button>
  );
};

export default ChannelItem;
