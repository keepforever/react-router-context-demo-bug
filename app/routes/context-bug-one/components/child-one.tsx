import { useContextBugDemoContext } from "~/routes/context-bug-one/context-bug-one-context";
import { ChildTwo } from "./child-two";

export const ChildOne = () => {
  const { count, setCount } = useContextBugDemoContext();

  console.group(
    `%cchild-one.tsx`,
    "color: #ff0000; font-size: 13px; font-weight: bold;"
  );
  console.log("\n", `count = `, count, "\n");
  console.log("\n", `setCount = `, setCount, "\n");
  console.groupEnd();

  return (
    <div>
      <h2>Child One</h2>
      <p>This is the first child component.</p>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Increment Countx
      </button>
      <button
        onClick={() => {
          setCount((prev) => prev - 1);
        }}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Decrement Count Foo
      </button>

      <ChildTwo />
    </div>
  );
};
