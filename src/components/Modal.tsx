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
    <div className='flex flex-col gap-1 text-center'>
      {countdown}
      <button onClick={onClose}>❌</button>
    </div>
  );
};

export default Modal;