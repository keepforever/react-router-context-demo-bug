import { logObjectDetails } from "~/utils/misc";
import { useContextBugDemoContext } from "../context-bug-one-context";

export function ChildTwo() {
  const { count } = useContextBugDemoContext();

  return (
    <div>
      <h1>Hello ChildTwo </h1>
      <p>Count: {count}</p>
      <p>hello</p>
    </div>
  );
}
