export default {
  app: '',
  setApp() {
    this.app = document.getElementById('app');
  },

  renderForm() {
    app.innerHTML = '';
    app.innerHTML = `  <div class="row container">
    <h1>Add Profile</h1>
        <form id="userAction"class="col s6 offset-by-3">
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
      <input type="submit" value="submit" class="waves-effect waves-light blue btn">
      <a onclick="goHome()" class="waves-effect waves-light btn blue"><i class="material-icons left">home</i>button</a>
      </div>
      </form>
      </div>`;
  },
  renderUsers(users) {
    app.innerHTML = '';
    let ul = document.createElement('ul');
    ul.setAttribute('class', 'collection');
    users.forEach(user => {
      ul.innerHTML += `<li id=${user.id} onclick="seeUser(this.id)" class="collection-item">${user.name} (${user.userName}) </li>`;
    });
    ul.innerHTML += `
    <div class="fixed-action-btn ">
    <a onclick="openForm()" class="btn-floating btn-large blue">
      <i class="large material-icons">add</i>
    </a>
  </div>
    `;
    app.appendChild(ul);
  },
  renderSelectedUser(user) {
    app.innerHTML = '';
    app.innerHTML = `
        <div class="container row">
          <div class="col s8">
            <img src=${user.image}>
            <div class="card-panel purple lighten-3"><strong>Name: </strong><span>${user.name}</span></div>
            <div class="card-panel purple lighten-3"><strong>User Name : </strong><span>${user.userName}</span></div>            
            <div class="card-panel purple lighten-3"><strong>Email: </strong> <span>${user.email}</span></div>            
            <div class="card-panel purple lighten-3"><strong>Age: </strong> <span>${user.age}</span></div>            
            <div class="card-panel purple lighten-3"><strong>Location: </strong> <span>${user.location}</span></div>            
            <div class="card-panel purple lighten-3"> <strong>Likes To DO : </strong><span>${user.hobies}</span></div>                    
          </div>    
        </div>
        
        <div class="fixed-action-btn toolbar">
        <a class="btn-floating btn-large blue">
          <i class="large material-icons">dehaze</i>
        </a>
        <ul>
          <li class="waves-effect waves-light"><a onclick="goHome()" href="#!"><i class="material-icons">home</i></a></li>        
          <li class="waves-effect waves-light" id=${user.id}><a onclick ="updateUser(this)" href="#!"><i class="material-icons">create</i></a></li>
          <li class="waves-effect   waves-light"id=${user.id}><a onclick="deleteUser(this)" href="#!"><i class="material-icons">delete</i></a></li>
        </ul>
      </div>
    `;
  },
  renderUpdateUser(user) {
    app.innerHTML = '';
    app.innerHTML = `  <div class="row container">
    <h3>Update ${user.name} profile</h3>
        <form id="userAction"class="col s8 offset-by-2">
          <div class="row">
            <div class="input-field col s6">
              <input placeholder="Placeholder" value=${user.name} id="name" type="text" class="validate">
              <label class="active" for="name">Full Name</label>
            </div>
            <div class="input-field col s6">
              <input id="userName" value=${user.userName} type="text" class="validate">
              <label class="active" for="userName">User Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="email" value=${user.email} type="email" class="validate">
              <label class="active" for="email">Email</label>
            </div>
          </div>
          <div class="row">
          <div class="input-field col s12">
            <input id="age" value=${user.age} type="number" class="validate">
            <label class="active" for="age">Age</label>
          </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <input id="location" value=${user.location} type="text" class="validate">
          <label class="active" for="location">Location</label>
        </div>
        <div class="input-field col s12">
            <input id="hobbies" value=${user.hobies} type="text" class="validate">
            <label class="active" for="hobbies">Hobbies</label>
      </div>
        <div class="input-field col s12">
            <input id="image" value=${user.image} type="text" class="validate">
            <label class="active" for="image">Image-URL</label>
        </div>
      </div>
      <input type="submit" value="update" class="waves-effect waves-light blue btn">
      <a onclick="goHome()" class="waves-effect waves-light btn blue"><i class="material-icons left">home</i>button</a>
      </div>
      </form>
      </div>`;
  }
};
