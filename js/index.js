const loadUsers = () => {
  fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}
const displayUsers = users => {
  const usersContainer = document.getElementById('user-container');
  for (const user of users) {
    console.log(user);
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');
    userDiv.innerHTML = `
    <img src="${user.picture.large}">
    <h3>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
    <h5>Age: ${user.dob.age}</h5>
    <p>Location: ${user.location.city}, ${user.location.country}</p>
    <p>E-mail: ${user.email}</p>
    <p>Number: ${user.phone}</p>
    `;
    usersContainer.appendChild(userDiv);
  }
}
loadUsers();