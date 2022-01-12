export function renderParticipant(participant) {
    const participantEl = document.createElement('p');
    participantEl.classList.add('participant');
    participantEl.textContent = `${participant.name} - Age: ${participant.age}`;
    return participantEl;
}