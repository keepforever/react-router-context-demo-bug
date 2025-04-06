import { useState } from "react";
import { useCauseBugOne } from "~/hooks/causeBugOne";

// Custom hook for utilities
export function useContextBugOneUtils() {
  const [count, setCount] = useState(0);
  const { count: countTwo, setCount: setCountTwo } = useCauseBugOne();

  return {
    count,
    setCount,
    countTwo,
    setCountTwo,
  };
}
