import React, { useCallback, useEffect } from 'react';

function useOutsideClickHandler(ref, callbackFn) {
  const handleClickOutside = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callbackFn();
      }
    },
    [callbackFn, ref],
  );

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
}

export { useOutsideClickHandler };
