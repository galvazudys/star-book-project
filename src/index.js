import user from './models/userModel';
import controller from './controllers/controller';
import view from './views/view';

window.onload = () => {
  controller.setModel(user);
  controller.setView(view);
  // controller.renderForm(() => {
  //   const form = document.getElementById('userAction');
  //   form.addEventListener('submit', e => {
  //     e.preventDefault();
  //     const userForm = {
  //       name: e.target[0].value,
  //       userName: e.target[1].value,
  //       email: e.target[2].value,
  //       age: parseInt(e.target[3].value),
  //       location: e.target[4].value,
  //       hobies: e.target[5].value,
  //       cardId: 'x',
  //       image: e.target[6].value
  //     };
  //     controller.addUser(userForm);
  //   });
  // });
  controller.readAll((err, res) => {
    console.log(res);
  });
  controller.renderUsers();
  window.seeUser = function seeUser(userID) {
    console.log(userID);
  };
};
