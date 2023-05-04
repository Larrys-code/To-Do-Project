export default class ToDo {
  constructor(
    name,
    id,
    description,
    due = false,
    priority = 0,
    checklist = []
  ) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.due = due;
    this.priority = priority;
    this.checklist = checklist;
  }

  editValue = (key, settings) => {
    switch (key) {
      case "name":
        this.name = settings;
        break;
      case "id":
        this.id = settings;
        break;
      case "description":
        this.description = settings;
        break;
      case "due":
        this.due = settings;
        break;
      case "priority":
        this.priority = settings;
        break;
      case "checklist":
        this.checklist = settings;
        break;
      default:
    }
  };
}
