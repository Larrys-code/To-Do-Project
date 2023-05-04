import "../scss/style.scss";
import makeBase from "./ToDo_Display/makeBase";
import * as ToDoMan from "./ToDo_App/todoManager";

makeBase();
const toDo = ToDoMan;
toDo.addToDo("Hi", "desc", false, 0);
toDo.addToDo("Bye", "descro");
console.log(toDo.getAll());
console.log(toDo.editToDo(1, "name", "bruh"));
console.log(toDo.getAll());
