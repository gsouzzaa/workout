import React, { useState, useEffect } from 'react';

type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
        clearInterval(interval);
        onClose();
    }

    return () => clearInterval(interval);
  }, [countdown]);

  return (
    <div>
      {countdown}
      <button className='text-xs' onClick={onClose}>❌</button>
    </div>
  );
};

export default Modal;