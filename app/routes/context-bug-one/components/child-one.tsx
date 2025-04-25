import { useContextBugDemoContext } from "~/routes/context-bug-one/context-bug-one-context";
import { ChildTwo } from "./child-two";

export const ChildOne = () => {
  const { count, setCount } = useContextBugDemoContext();

  return (
    <div className="border-red-300 border-2 p-4 rounded mb-4">
      <h2 className="text-2xl">Child One</h2>
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
