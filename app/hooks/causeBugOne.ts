import { useState } from "react";

export const useCauseBugOne = () => {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
};
