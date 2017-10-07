import user from './models/userModel';
import controller from './controllers/controller';
import view from './views/view';
import thumbnailModel from './models/thumbnailModel';

window.onload = () => {
  controller.setModel(user);
  controller.setView(view);
  controller.setThumbModel(thumbnailModel);

  controller.renderThumbnail();

  window.seeUser = function seeUser(userID) {
    controller.renderSelectedUser(userID);
  };
  window.goHome = () => {
    controller.renderThumbnail();
  };
  window.openForm = () => {
    controller.renderThumbnailForm(() => {
      const form = document.getElementById('thumbnailForm');
      form.addEventListener('submit', e => {
        e.preventDefault();
        let profID;
        let cardID;
        let thumbnailForm = {
          name: e.target[0].value,
          userName: e.target[1].value,
          image: e.target[2].value,
          profileId: 'x'
        };
        controller.addThumbnail(thumbnailForm, (error, result) => {
          if (error) throw error;
          cardID = result.result.id;
        });
        let userForm = {
          name: 'please edit name',
          userName: 'lease edit userName',
          email: 'example@example.com',
          age: parseInt('99'),
          location: 'please edit your location',
          hobies: 'please add some hobbies',
          cardId: 'x',
          image: 'http://lorempixel.com/640/480'
        };
        controller.addUser(userForm, (err, result) => {
          if (err) throw err;
          profID = result.result.id;
        });
        thumbnailForm.profileId = profID;
        userForm.cardId = cardID;
        controller.updateThumbnail(cardID, thumbnailForm, (err, result) => {
          if (err) throw err;
          controller.updateUser(profID, userForm, (err, user) => {
            if (err) throw err;
            controller.renderThumbnail();
          });
        });
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
