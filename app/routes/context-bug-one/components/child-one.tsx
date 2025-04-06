import { useContextBugDemoContext } from "~/routes/context-bug-one/context-bug-one-context";
import { ChildTwo } from "./child-two";

export const ChildOne = () => {
  const { count, setCount } = useContextBugDemoContext();

  return (
    <div>
      <h2>Child One</h2>
      <p>This is the first child component.</p>
      <p>Count: {count}</p>
      <div>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment Count
        </button>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrement Count
        </button>
      </div>
      <ChildTwo />
    </div>
  );
};
