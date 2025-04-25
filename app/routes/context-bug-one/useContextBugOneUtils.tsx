import { useState } from "react";
import { useCauseBugOne } from "~/hooks/causeBugOne";
import { useTodosQuery } from "./context-bug-one-context";

// Custom hook for utilities
export function useContextBugOneUtils() {
  const [count, setCount] = useState(0);
  const { count: countTwo, setCount: setCountTwo } = useCauseBugOne();
  const todosQuery = useTodosQuery();

  return {
    count,
    setCount,
    countTwo,
    setCountTwo,
    todosQuery,
  };
}
