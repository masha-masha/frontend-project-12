import { useSelector, useDispatch } from "react-redux";
import filter from 'leo-profanity';
import {
  setActiveChannel,
  activeChannelSelector,
} from "../../../store/slices/activeChannelSlice";

const ChannelItem = ({ channel }) => {
  const activeChannel = useSelector(activeChannelSelector);
  const dispatch = useDispatch();
  const classes =
    channel.id === activeChannel.id
      ? "w-100 rounded-0 text-start btn btn-secondary"
      : "w-100 rounded-0 text-start btn";
  const handleSetActiveChannel = (channel) => {
    dispatch(setActiveChannel(channel));
  };
  return (
    <button
      type='button'
      className={classes}
      onClick={() => handleSetActiveChannel(channel)}
    >
      <span className='me-1'>#</span>
      {filter.clean(channel.name)}
    </button>
  );
};

export default ChannelItem;
