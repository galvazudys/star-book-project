export default {
  app: '',
  setApp() {
    this.app = document.getElementById('app');
  },

  renderForm() {
    app.innerHTML = '';
    app.innerHTML = `  <div class="row container">
        <form id="userAction"class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="Placeholder" id="name" type="text" class="validate">
              <label for="name">Full Name</label>
            </div>
            <div class="input-field col s6">
              <input id="userName" type="text" class="validate">
              <label for="userName">User Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" type="email" class="validate">
              <label for="email">Email</label>
            </div>
          </div>
          <div class="row">
          <div class="input-field col s12">
            <input id="age" type="number" class="validate">
            <label for="age">Age</label>
          </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <input id="location" type="text" class="validate">
          <label for="location">Location</label>
        </div>
        <div class="input-field col s12">
            <input id="hobbies" type="text" class="validate">
            <label for="hobbies">Hobbies</label>
      </div>
        <div class="input-field col s12">
            <input id="image" type="text" class="validate">
            <label for="image">Image-URL</label>
        </div>
      </div>
      <input type="submit" value="submit" class="waves-effect waves-light btn">
      </div>
      </form>
      </div>`;
  },
  renderUsers(users) {
    app.innerHTML = '';
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'collection');

    users.forEach(user => {
      ul.innerHTML += `<li id=${user.id} onclick="seeUser(this.id)" class="collection-item">${user.name}</li>`;
    });
    app.appendChild(ul);
  }
};
