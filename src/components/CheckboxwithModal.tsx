import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Modal from './Modal';

const CheckboxWithModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleCheckboxChange = () => {
    setIsOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  
  return (
    <div>
      <Checkbox onChange={handleCheckboxChange} />
      {isOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default CheckboxWithModal;