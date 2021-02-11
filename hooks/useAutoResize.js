import { useEffect, useRef } from 'react';

export default function useAutoResize(value) {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    // ref.current.style.height = 0;
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, [ref, value]);

  return ref;
}
