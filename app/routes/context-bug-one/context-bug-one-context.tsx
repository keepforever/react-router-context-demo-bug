import { createContext, useContext, useState } from "react";
import type { useContextBugOneUtils } from "./use-context-bug-one-utils";

// Context
const ContextBugDemoContext = createContext<
  ReturnType<typeof useContextBugOneUtils> | undefined
>(undefined);

// Custom hook for utilities
function useContextBugDemoUtils() {
  const [count, setCount] = useState(0);

  return {
    count,
    setCount,
  };
}

// Context provider
const ContextBugDemoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const utils = useContextBugDemoUtils();
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
