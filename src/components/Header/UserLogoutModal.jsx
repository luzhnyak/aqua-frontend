import React from 'react';
import { ReactComponent as IconClose } from '../../images/icons/x-mark-outline.svg';

const UserLogoutModal = onClose => {
  return (
    <div>
      <IconClose onClick={onClose} />
    </div>
  );
};

export default UserLogoutModal;
