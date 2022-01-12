import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('form');
const nameInput = document.querySelector('#name-input');
const ageInput = document.querySelector('#age-input');
console.log(form, nameInput, ageInput);

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    const workshops = await getWorkshops();
    
    const workshopDrodown = document.querySelector('select');
    
    for (let workshop of workshops) {
        const workshopEl = document.createElement('option');
        workshopEl.value = workshop.id;
        workshopEl.textContent = workshop.title;

        workshopDrodown.append(workshopEl);
    }
});