import { createContext, useContext, useState } from "react";
import { ChildOne } from "~/routes/context-bug-one/components/child-one";
import { logObjectDetails } from "~/utils/misc";
import type { Route } from "./+types/context-bug-one";

// Custom hook for utilities
export function useContextBugOneUtils() {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
}
