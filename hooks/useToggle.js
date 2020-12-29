import { useState, useCallback } from 'react';

export default function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((currentValue) => !currentValue);
  }, []);

  return { value, set: setValue, toggle };
}
