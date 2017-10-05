export default {
  model: {},
  view: {},
  setView(view) {
    this.view = view;
  },
  setModel(model) {
    this.model = model;
  },
  renderForm() {
    this.view.renderForm();
  },
  addUser(form) {
    this.model.create(form, (error, msg) => {
      if (error) {
        console.log('error creating user');
      } else {
        console.log(msg);
        this.readAll();
      }
    });
  },
  readAll() {
    this.model.readAll((error, result) => {
      if (error) {
        console.log(error);
      }
      {
        console.log(result);
      }
    });
  }
};
