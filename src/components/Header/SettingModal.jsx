import React from 'react';
import { ReactComponent as IconClose } from '../../images/icons/x-mark-outline.svg';

const SettingModal = onClose => {
  return (
    <div>
      <IconClose onClick={onClose} />
    </div>
  );
};

export default SettingModal;
