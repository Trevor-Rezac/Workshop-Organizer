import { checkAuth, deleteParticipant, getWorkshops, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const workshopsContainer = document.querySelector('.workshops-container');
// console.log(workshopsContainer);

logoutButton.addEventListener('click', () => {
    logout();
});

window.addEventListener('load', async() => {
    await displayWorkshops();
});

async function displayWorkshops() {
    const workshops = await getWorkshops();
    
    workshopsContainer.textContent = '';

    for (let workshop of workshops) {
        const workshopDiv = document.createElement('div');
        const workshopTitleEl = document.createElement('h3');
        const participantsEl = document.createElement('div');
        
        workshopDiv.classList.add('workshop');
        workshopTitleEl.classList.add('workshop-title');
        participantsEl.classList.add('participants');

        workshopTitleEl.textContent = workshop.title;

        for (let participant of workshop.participants) {
            const participantEl = document.createElement('p');
            participantEl.classList.add('participant');
            participantEl.textContent = `${participant.name} - Age: ${participant.age}`;

            participantEl.addEventListener('click', async() => {
                await deleteParticipant(participant.id);
                await displayWorkshops();
            });

            participantsEl.append(participantEl);
        }

        workshopDiv.append(workshopTitleEl, participantsEl);
        workshopsContainer.append(workshopDiv);
    }
}