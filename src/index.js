import user from './models/userModel';
import controller from './controllers/controller';
import view from './views/view';

window.onload = () => {
  controller.setModel(user);
  controller.setView(view);

  controller.renderUsers();
  window.seeUser = function seeUser(userID) {
    controller.renderSelectedUser(userID);
  };
  window.goHome = () => {
    controller.renderUsers();
  };
  window.openForm = () => {
    controller.renderForm(() => {
      const form = document.getElementById('userAction');
      form.addEventListener('submit', e => {
        e.preventDefault();
        const userForm = {
          name: e.target[0].value,
          userName: e.target[1].value,
          email: e.target[2].value,
          age: parseInt(e.target[3].value),
          location: e.target[4].value,
          hobies: e.target[5].value,
          cardId: 'x',
          image: e.target[6].value
        };
        controller.addUser(userForm);
      });
    });
  };

  window.deleteUser = e => {
    const id = e.parentNode.id;
    controller.deleteUser(id, (error, result) => {
      if (error) throw error;
      controller.renderUsers();
    });
  };

  window.updateUser = e => {
    const id = e.parentNode.id;
    controller.readUser(id, (error, user) => {
      if (error) throw error;
      controller.renderUserUpdateForm(user, () => {
        const form = document.getElementById('userAction');
        form.addEventListener('submit', e => {
          e.preventDefault();
          const userForm = {
            name: e.target[0].value,
            userName: e.target[1].value,
            email: e.target[2].value,
            age: parseInt(e.target[3].value),
            location: e.target[4].value,
            hobies: e.target[5].value,
            cardId: 'x',
            image: e.target[6].value
          };
          controller.updateUser(id, userForm, (error, newUser) => {
            if (error) throw error;
            controller.renderSelectedUser(id);
          });
        });
      });
    });
  };
};
