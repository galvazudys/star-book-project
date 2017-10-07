export default {
  model: {},
  view: {},
  thumbnailModel: {},
  setThumbModel(model) {
    this.thumbnailModel = model;
  },
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
  addUser(form, cb) {
    this.model.create(form, (error, msg) => {
      if (error) {
      } else {
        cb(null, msg);
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
  },
  renderThumbnail() {
    this.thumbnailModel.readAll((error, thumb) => {
      if (error) throw error;
      this.view.renderUserThumbnails(thumb);
    });
  },
  renderThumbnailForm(cb) {
    this.view.renderThumbnailForm();
    cb();
  },
  readThumbnail(id, cb) {
    this.thumbnailModel.read(id).then(data => {
      cb(null, data);
    });
  },
  addThumbnail(form, cb) {
    this.thumbnailModel.create(form, (err, result) => {
      if (err) throw err;
      cb(null, result);
    });
  },
  updateThumbnail(id, user, cb) {
    this.thumbnailModel.update(id, user, (error, result) => {
      if (error) throw error;
      cb(null, result);
    });
  },
  deleteThumbnail(id, cb) {
    this.thumbnailModel.remove(id, (err, result) => {
      if (err) throw err;
      cb(null, result);
    });
  },
  renderThumbnailUpdate(id, cb) {
    this.thumbnailModel.read(id).then(thumb => {
      this.view.renderUpdateThumbnailForm(thumb);
      cb(null, thumb);
    });
  }
};
