import { ChildOne } from "~/routes/context-bug-one/components/child-one";
import type { Route } from "./+types/context-bug-one";
import {
  useContextBugDemoContext,
  withContextBugDemoContext,
  useTodosQuery,
} from "./context-bug-one-context";
import { TodosChild } from "./components/todos-child";

export async function loader(args: Route.LoaderArgs) {
  return {
    hello: args.request.url,
  };
}

function ContextBugDemo({ loaderData }: Route.ComponentProps) {
  const { count, setCount, todosQuery } = useContextBugDemoContext();
  const { data, isLoading, error } = todosQuery;

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
      <TodosChild />
    </div>
  );
}

export default withContextBugDemoContext(ContextBugDemo);
