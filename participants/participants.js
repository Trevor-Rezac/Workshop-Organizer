import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('form');
const nameInput = document.querySelector('#name-input');
const ageInput = document.querySelector('#age-input');
console.log(form, nameInput, ageInput);

logoutButton.addEventListener('click', () => {
    logout();
});
