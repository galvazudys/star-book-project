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
  readUser(id, cb) {
    this.model.read(id).then(result => {
      cb(null, result);
    });
  },
  addUser(form) {
    this.model.create(form, (error, msg) => {
      if (error) {
        console.log('error in creating user');
      } else {
        console.log(msg);
        this.readAll((err, result) => {
          if (err) throw err;
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
  updateUser(id, user, cb) {
    this.model.update(id, user, (error, result) => {
      if (error) throw error;
      cb(null, result);
    });
  },
  deleteUser(id, cb) {
    this.model.remove(id, (error, result) => {
      if (error) throw error;
      cb(null, result);
    });
  },
  renderUserUpdateForm(user, cb) {
    this.view.renderUpdateUser(user);
    cb();
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
