import { useSelector } from 'react-redux';
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import { activeChannelSelector } from '../../../store/slices/activeChannelSlice';
import ChannelItem from './ChannelItem';

const DropdownMenu = ({
  renderModal,
  closeModal,
  openModal,
  modalType,
  channel,
  t,
}) => {
  const activeChannel = useSelector(activeChannelSelector);

  return (
    <Dropdown as={ButtonGroup} className="me-2 w-100">
      <ChannelItem channel={channel} />
      <Dropdown.Toggle
        split
        variant={activeChannel.id === channel.id ? 'secondary' : ''}
        id="channelDropdown"
      >
        <span className="visually-hidden">{t('channel.description')}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => openModal('removing')}>
          {t('channel.deleteButton')}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => openModal('renaming')}>
          {t('channel.renameButton')}
        </Dropdown.Item>
        {renderModal(modalType, closeModal, channel)}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownMenu;