import { useEffect, useState } from "react";

export default function NoEffect() {
  return (
    <div>
      <Form />
    </div>
  );
}

function Form() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  // Avoid: unnecessary
  // const [fullName, setFullName] = useState("");
  // useEffect(() => {
  //   setFullName(`${firstName} ${lastName}`);
  // }, [firstName, lastName]);

  const fullName = `${firstName} ${lastName}`;

  return <div></div>;
}

function TodoList({ todos, filter }) {
  const [newTodo, setNewTodo] = useState("");

  // Avoid: redundant
  // const [visibleTodos, setVisibleTodos] = useState([]);
  // useEffect(() => {
  //   setVisibleTodos(getFilteredTodos(todos, filter));
  // }, [todos, filter]);

  // Good: for most cases
  // const visibleTodos = getFilteredTodos(todos, filter);

  // Best: does not rerun if none of the dependencies change
  const visibleTodos = useMemo(() => {
    return getFilteredTodos(todos, filter);
  }, [todos, filter]);
}
