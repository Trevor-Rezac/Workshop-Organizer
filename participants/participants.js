import { checkAuth, createParticipant, getWorkshops, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const form = document.querySelector('form');
// const nameInput = document.querySelector('#name-input');
// const ageInput = document.querySelector('#age-input');
// console.log(form, nameInput, ageInput);

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    const workshops = await getWorkshops();
    
    const workshopDrodown = document.querySelector('select');
    
    for (let workshop of workshops) {
        const workshopEl = document.createElement('option');
        workshopEl.value = workshop.id;
        console.log(workshopEl.value);
        workshopEl.textContent = `(${workshop.id}) ${workshop.title}`;

        workshopDrodown.append(workshopEl);
    }
});

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = data.get('name');
    const age = data.get('age');
    const phone_number = data.get('phone-number');
    const email = data.get('email');
    const workshop = data.get('workshop-id');
// console.log(name, age, workshop, phone_number, email);

    await createParticipant({
        name,
        age,
        phone_number,
        email,
        workshop_id: workshop,
    });

    form.reset();

    window.location.href = '../workshops/index.html';
});