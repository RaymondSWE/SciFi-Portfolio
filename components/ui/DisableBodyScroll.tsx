import { useEffect } from 'react';

const DisableBodyScroll = ({ isActive }: { isActive: boolean }) => {
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isActive]);

  return null; 
};

export default DisableBodyScroll;
