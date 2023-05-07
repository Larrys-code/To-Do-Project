import "../scss/style.scss";
import makeBase from "./ToDo_Display/makeBase";
import * as ToDoMan from "./ToDo_App/todoManager";

makeBase();
const toDo = ToDoMan;
toDo.addToDo("Hi", "desc", false, 0, ["steaks", "poopy", "butts"]);
toDo.addToDo("Bye", "descro", false, 0, ["poopy", "butts"]);
console.log(toDo.editToDo(1, "name", "bruh"));
console.log(toDo.getGroups());
console.log(toDo.removeToDo(0));
console.log(toDo.getGroups());
console.log(toDo.getAll());
