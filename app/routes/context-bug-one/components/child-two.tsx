import { useContextBugDemoContext } from "../context-bug-one-context";

export function ChildTwo() {
  const { count, setCount } = useContextBugDemoContext();

  return (
    <div>
      <h1>Hello ChildTwo</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      </div>
      foo bar baz
    </div>
  );
}
