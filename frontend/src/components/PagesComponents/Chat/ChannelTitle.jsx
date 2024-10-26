const Title = ({
  renderModal, closeModal, openModal, modalType, t,
}) => (
  <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
    <b>{t('chatPage.title')}</b>
    <button
      type="button"
      className="p-0 text-primary btn btn-group-vertical"
      onClick={() => openModal('adding')}
    >
      +
    </button>
    {renderModal(modalType, closeModal)}
  </div>
);

export default Title;
