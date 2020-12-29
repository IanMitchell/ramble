import { useEffect, useRef } from 'react';

export default function useClickOutside(callback, escape = true) {
  const ref = useRef();

  // TODO: Check that this prevents unnecessary rerenders
  const callbackRef = useRef();
  callbackRef.current = callback;

  useEffect(() => {
    const onClick = (event) => {
      if (ref?.current && !ref.current.contains(event.target)) {
        callbackRef.current(event);
      }
    };

    const onPress = (event) => {
      if (escape && event.key === 'Escape') {
        callbackRef.current(event);
      }
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keypress', onPress);

    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keypress', onPress);
    };
  }, [ref, callbackRef, escape]);

  return ref;
}
