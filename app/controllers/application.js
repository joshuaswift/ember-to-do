import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    addTask(description) {
      this.get("store")
        .createRecord("task", {
          description
        })
        .save();

      document.getElementByClass("form-group").reset();
    },
    removeTask(task) {
      task.deleteRecord();
      task.save();
    }
  }
});
