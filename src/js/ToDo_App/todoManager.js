import ToDo from "./todo";

const allToDos = [];
let idIterable = 0;

export function getAll(group = "") {
  if (!group) return JSON.parse(JSON.stringify(allToDos));
  const groupArray = allToDos.filter((todo) => {
    const { groups } = todo;
    return groups.includes(group);
  });
  return JSON.parse(JSON.stringify(groupArray));
}

export function getGroups() {
  const groupList = [];
  allToDos.forEach((todo) => {
    if (!todo.groups) return;
    const { groups } = todo;
    groups.forEach((group) => {
      if (!groupList.includes(group)) groupList.push(group);
    });
  });
  return JSON.parse(JSON.stringify(groupList));
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

export function removeToDo(id) {
  const indexOfToDo = allToDos.findIndex((todo) => todo.id === id);
  allToDos.splice(indexOfToDo, 1);
}
