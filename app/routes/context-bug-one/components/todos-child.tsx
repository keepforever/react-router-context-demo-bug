import { useContextBugDemoContext } from "../context-bug-one-context";

type Props = {};

export const TodosChild: React.FC<Props> = (props) => {
  const { todosQuery } = useContextBugDemoContext();
  const { data, isLoading, error } = todosQuery;

  return (
    <div className="mt-8 p-4 rounded bg-gray-50 border-green-500 border-4">
      <h3 className="font-bold mb-2">Todos from API</h3>
      <span>break me now what</span>
      {isLoading && <p>Loading todos...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data && (
        <ul className="list-disc pl-5">
          {data.todos?.map((todo: any) => (
            <li key={todo.id}>{todo.todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
