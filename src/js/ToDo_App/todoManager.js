import ToDo from "./todo";

const allToDos = [];
let idIterable = 0;

export function getAll() {
  return JSON.parse(JSON.stringify(allToDos));
}

function getToDo(id) {
  return allToDos.find((todo) => todo.id === id);
}

export function editToDo(id, key, value) {
  const todo = getToDo(id);
  todo.editValue(key, value);
}

export function addToDo(
  name,
  description,
  due = false,
  priority = 0,
  groups = [],
  checklist = []
) {
  const id = idIterable;
  const newToDo = new ToDo(
    name,
    id,
    description,
    due,
    priority,
    groups,
    checklist
  );
  allToDos.push(newToDo);
  idIterable += 1;
  return idIterable - 1;
}
