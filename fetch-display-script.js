document.addEventListener('DOMContentLoaded', () => {
    const fetchUsersBtn = document.getElementById('fetchUsersBtn');
    const loadingMessage = document.getElementById('loadingMessage');
    const errorMessage = document.getElementById('errorMessage');
    const userList = document.getElementById('userList');
    fetchUsersBtn.addEventListener('click', async () => {
        userList.innerHTML = ''; 
        errorMessage.style.display = 'none'; 
        loadingMessage.style.display = 'block'; 
        try {
            const response = await
            fetch('https://jsonplaceholder.typicode.com/users');
            if (!response.ok) {
                throw new Error(`HTTP error! Status:
                ${response.status}`);
            }
            const users = await response.json();
            loadingMessage.style.display = 'none'; 
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `<strong>${user.name}</strong>(${user.username})<br>Email: ${user.email}<br>Phone: ${user.phone}<br>Website: <a href="http://${user.website}"target="_blank">${user.website}</a><hr>`;
                userList.appendChild(listItem);
            });
        } catch (error) {
            loadingMessage.style.display = 'none'; 
            errorMessage.textContent = `Failed to load users:
            ${error.message}. Please try again.`;
            errorMessage.style.display = 'block'; 
            console.error('Fetch error:', error);
        }
    });
});    