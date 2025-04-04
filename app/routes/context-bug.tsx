import { createContext, useContext, useState } from "react";
import { ChildOne } from "~/components/child-one";
import type { Route } from "./+types/context-bug.ts";

export async function loader(args: Route.LoaderArgs) {
  return {
    hello: args.request.url,
  };
}

function ContextBugDemo({ loaderData }: Route.ComponentProps) {
  const { count, setCount } = useContextBugDemoContext();
  console.group(
    `%ccontext-bug.tsx`,
    "color: #ffffff; font-size: 13px; font-weight: bold;"
  );
  console.log("\n", `count = `, count, "\n");
  console.log("\n", `loaderData = `, loaderData, "\n");
  console.log("\n", `setCount = `, setCount, "\n");
  console.groupEnd();
  return (
    <div className="flex h-[calc(100vh-3rem)] flex-col">
      <ChildOne />
    </div>
  );
}

// Context
const ContextBugDemoContext = createContext<
  ReturnType<typeof useContextBugDemoUtils> | undefined
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

export default withContextBugDemoContext(ContextBugDemo);
