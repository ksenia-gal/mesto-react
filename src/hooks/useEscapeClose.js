import React from 'react';

// создание кастомного хука useEscapeCLose
function useEscapeClose (isOpen, onClose) {
  React.useEffect(() => {
    if (!isOpen) return;
    const closeByEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isOpen, onClose]);
}

export default useEscapeClose;