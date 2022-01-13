export function renderParticipant(participant) {
    const a = document.createElement('a');
    a.href = `../details/?id=${participant.id}`;
    const participantEl = document.createElement('p');
    participantEl.classList.add('participant');
    participantEl.textContent = `${participant.name} - Age: ${participant.age}`;
    a.append(participantEl);
    return a;
}

export function renderWorkshop(workshop) {
    const workshopDiv = document.createElement('div');
    const workshopTitleEl = document.createElement('h3');
    
    workshopDiv.classList.add('workshop');
    workshopTitleEl.classList.add('workshop-title');
    workshopTitleEl.textContent = workshop.title;

    workshopDiv.append(workshopTitleEl);

    return workshopDiv;
}

export function renderDetails(participant) {
    const participantContainer = document.createElement('div');
    const nameEl = document.createElement('h1');
    const ageEl = document.createElement('p');
    const phoneNumberEl = document.createElement('p');
    const emailEl = document.createElement('p');

    participantContainer.classList.add('participant-container');
    nameEl.classList.add('participant-name');
    ageEl.classList.add('participant-age');
    phoneNumberEl.classList.add('participant-phone-number');
    emailEl.classList.add('participant-email');

    nameEl.textContent = participant.name;
    ageEl.textContent = `Age: ${participant.age}`;
    phoneNumberEl.textContent = `Phone Number: ${participant.phone_number}`;
    emailEl.textContent = `Email: ${participant.email}`;

    participantContainer.append(nameEl, ageEl, phoneNumberEl, emailEl);
    return participantContainer;
}