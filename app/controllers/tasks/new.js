import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class TasksNewController extends Controller {
  @action
  addTask() {
    // Getting Task details
    const title = this.get("title");
    const date = this.get("date");
    const description = this.get("description");

    // Create New Task
    const newTask = this.store.createRecord("task", {
      title: title,
      date: new Date(date),
      description: description,
    });

    alert(title);

    newTask.save();

    this.setProperties({
      title: "",
      date: "",
      description: "",
    });
  }
}
