export default {
  model: {},
  view: {},
  setView(view) {
    this.view = view;
  },
  setModel(model) {
    this.model = model;
  },
  renderForm(cb) {
    this.view.renderForm();
    cb();
  },
  addUser(form) {
    this.model.create(form, (error, msg) => {
      if (error) {
        console.log('error in creating user');
      } else {
        console.log(msg);
        this.readAll((err, result) => {
          console.log(result);
        });
      }
    });
  },
  readAll(cb) {
    this.model.readAll((error, result) => {
      if (error) {
        cb(error, null);
      }
      {
        cb(null, result);
      }
    });
  },
  renderUsers() {
    this.readAll((err, result) => {
      this.view.renderUsers(result);
    });
  },
  renderSelectedUser(id) {
    this.model.read(id).then(user => {
      this.view.renderSelectedUser(user);
    });
  }
};
