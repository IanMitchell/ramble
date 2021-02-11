import { useState } from "react";

export default function useCounter(initialValue) {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    increment: () => setValue((count) => count + 1),
    decrement: () => setValue((count) => count - 1),
  };
}
