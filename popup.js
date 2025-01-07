function fetchRooms() {
  fetch('https://vibehut.io/api/v1/public/calls/active-calls', {
    headers: {
      'api-key': '55221ae45adfd8eee24bf704e3f05c1d'
    }
  })
  .then(res => res.json())
  .then(data => {
    const roomsDiv = document.getElementById('rooms');
    if (!data.data.length) {
      roomsDiv.innerHTML = `
        <div class="no-calls">
          No active calls at the moment
          <a href="https://vibehut.io/general-discussion" target="_blank" class="join-general">
            Join General Discussion
          </a>
        </div>
      `;
      return;
    }

    roomsDiv.innerHTML = data.data.map(room => `
      <div class="room">
        <div class="room-header">
          <div class="room-name">${room.roomName || 'Unnamed Room'}</div>
          <a href="https://vibehut.io/rooms/${room.room}" target="_blank" class="room-link">
          </a>
        </div>
        ${room.users.map(user => `
          <div class="user">
            <img src="${user.profile_picture || 'https://www.gravatar.com/avatar/?d=mp'}" 
                 onerror="this.src='https://www.gravatar.com/avatar/?d=mp'"
                 alt="${user.username}">
            ${user.username}
          </div>
        `).join('')}
      </div>
    `).join('');
  })
  .catch(error => {
    document.getElementById('rooms').innerHTML = 'Error loading rooms';
    console.error(error);
  });
}

document.addEventListener('DOMContentLoaded', fetchRooms); 