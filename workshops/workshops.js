import { checkAuth, deleteParticipant, getWorkshops, logout } from '../fetch-utils.js';
import { renderParticipant, renderWorkshop } from '../render-utils.js';

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
        const workshopDiv = renderWorkshop(workshop);

        const participantsEl = document.createElement('div');
        participantsEl.classList.add('participants');

        for (let participant of workshop.participants) {
            const participantEl = renderParticipant(participant);

            const participantAndBtnContainer = document.createElement('div');
            participantAndBtnContainer.classList.add('participant-btn-container');
            const removeBtn = document.createElement('button');
            removeBtn.classList.add('remove-btn');
            removeBtn.textContent = 'Remove';
    
            removeBtn.addEventListener('click', async() => {
                await deleteParticipant(participant.id);
                await displayWorkshops();
            });

            participantAndBtnContainer.append(participantEl, removeBtn);
            participantsEl.append(participantAndBtnContainer);

        }

        workshopDiv.append(participantsEl);
        workshopsContainer.append(workshopDiv);
    }
}