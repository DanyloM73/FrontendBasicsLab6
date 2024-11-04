const fetchUsers = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      displayUsers(data.results);
    })
    .catch(error => {
      console.error('An error occurred while receiving data:', error);
    });
}

const displayUsers = (users) => {
  const userContainer = document.getElementById('user-container');
  userContainer.innerHTML = '';

  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    
    userCard.innerHTML = `
      <img src="${user.picture.large}" alt="User Picture">
      <p class="user-info"><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
      <p class="user-info"><strong>City:</strong> ${user.location.city}</p>
      <p class="user-info"><strong>Post index:</strong> ${user.location.postcode}</p>
      <p class="user-info"><strong>Phone:</strong> ${user.phone}</p>
    `;
      
    userContainer.appendChild(userCard);
  });

  userContainer.style.display = 'flex';
}

document.querySelector('#loadButton').addEventListener('click', () => fetchUsers());
