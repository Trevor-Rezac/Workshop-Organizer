import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const workshopsContainer = document.querySelector('.workshops-container');
console.log(workshopsContainer);

logoutButton.addEventListener('click', () => {
    logout();
});
