import { useState } from 'react';
import eyeOpen from '../assets/eye-open.png';
import eyeClosed from '../assets/eye-closed.png';

export function usePasswordVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  const icon = isVisible ? eyeOpen : eyeClosed;

  return { isVisible, toggleVisibility, icon };
}
