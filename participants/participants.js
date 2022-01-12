import { checkAuth, createParticipant, getWorkshops, logout } from '../fetch-utils.js';

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

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get('name');
    const age = data.get('age');
    const workshop = data.get('workshop-id');
// console.log(name, age, workshop);

    await createParticipant({
        name,
        age,
        workshop_id: workshop,
    });

    form.reset();

    window.location.href = '../workshops/index.html';
});