import { createContext, useContext, useState } from "react";
import { useContextBugOneUtils } from "./useContextBugOneUtils";
import { useQuery } from "@tanstack/react-query";

// Context
const ContextBugDemoContext = createContext<
  ReturnType<typeof useContextBugOneUtils> | undefined
>(undefined);

// Custom hook for utilities
// function useContextBugOneUtils() {
//   const [count, setCount] = useState(0);
//   const resp = useCauseBugOne();

//   return {
//     count,
//     setCount,
//     resp,
//   };
// }

// Context provider
const ContextBugDemoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const utils = useContextBugOneUtils();
  return (
    <ContextBugDemoContext.Provider value={utils}>
      {children}
    </ContextBugDemoContext.Provider>
  );
};

// Custom hook to use the context
export const useContextBugDemoContext = () => {
  const context = useContext(ContextBugDemoContext);
  if (context === undefined) {
    throw new Error(
      "useContextBugDemo must be used within a ContextBugDemoProvider"
    );
  }
  return context;
};

export const withContextBugDemoContext = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const WithContextBugDemoContext = (props: P) => {
    return (
      <ContextBugDemoProvider>
        <Component {...props} />
      </ContextBugDemoProvider>
    );
  };

  WithContextBugDemoContext.displayName = `WithContextBugDemoContext(${
    Component.displayName || Component.name || "Component"
  })`;

  return WithContextBugDemoContext;
};

export function useTodosQuery() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/todos");
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });
}
