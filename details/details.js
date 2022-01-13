import { checkAuth, getParticipant, logout } from '../fetch-utils.js';
import { renderDetails } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const detailsContainer = document.querySelector('.details-container');

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
});