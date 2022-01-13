import { checkAuth, getParticipant, logout, getWorkshops, updateParticipant } from '../fetch-utils.js';
import { renderDetails } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const detailsContainer = document.querySelector('.details-container');
const detailsBtn = document.querySelector('.update-btn');
const formContainer = document.querySelector('.update-form-container');
const form = document.querySelector('form');

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const participant = await getParticipant(id);
    // console.log(participant);

    const participantEl = renderDetails(participant);
    detailsContainer.appendChild(participantEl);

    const workshops = await getWorkshops();
    
    const workshopDrodown = document.querySelector('select');
    
    for (let workshop of workshops) {
        const workshopEl = document.createElement('option');
        workshopEl.value = workshop.id;
        workshopEl.textContent = `(${workshop.id}) ${workshop.title}`;

        workshopDrodown.append(workshopEl);
    }
});

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const data = new FormData(form);
    const name = data.get('name');
    const age = data.get('age');
    const phone_number = data.get('phone-number');
    const email = data.get('email');
    const workshop_id = data.get('workshop-id');
// console.log(name, age, workshop, phone_number, email);
    
    const participant = {
        name, 
        age,
        phone_number, 
        email,
        workshop_id,
    };

    await updateParticipant(id, participant);

    form.reset();

    window.location.href = '../workshops/index.html';
});

detailsBtn.addEventListener('click', () => {
    formContainer.classList.remove('hidden');
    detailsBtn.classList.add('hidden');
});