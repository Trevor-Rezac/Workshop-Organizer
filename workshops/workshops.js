import { checkAuth, deleteParticipant, getWorkshops, logout } from '../fetch-utils.js';
import { renderParticipant } from '../render-utils.js';

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

        workshopDiv.classList.add('workshop');
        workshopTitleEl.classList.add('workshop-title');
        workshopTitleEl.textContent = workshop.title;

        const participantsEl = document.createElement('div');
        participantsEl.classList.add('participants');

        for (let participant of workshop.participants) {
            const participantEl = renderParticipant(participant);

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