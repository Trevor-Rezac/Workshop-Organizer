export function renderParticipant(participant) {
    const participantEl = document.createElement('p');
    participantEl.classList.add('participant');
    participantEl.textContent = `${participant.name} - Age: ${participant.age}`;
    return participantEl;
}

// export function renderWorkshop(workshop) {
//     const workshopDiv = document.createElement('div');
//     const workshopTitleEl = document.createElement('h3');
    
//     workshopDiv.classList.add('workshop');
//     workshopTitleEl.classList.add('workshop-title');
//     workshopTitleEl.textContent = workshop.title;

//     return workshopDiv;
// }