let sessions = [
    { subject: 'JavaScript', minutes: 40 },
    { subject: 'HTML', minutes: 25 },
    { subject: 'CSS', minutes: 30 }
];

const list = document.querySelector('#studyList');
const subjectInput = document.querySelector('#subjectInput');
const timeInput = document.querySelector('#timeInput');

const totalSessions = document.querySelector('#totalSessions');
const totalMinutes = document.querySelector('#totalMinutes');
const currentSubject = document.querySelector('#currentSubject');

document.querySelector('#addBtn').addEventListener('click', addSession);
document.querySelector('#sortBtn').addEventListener('click', sortByTime);
document.querySelector('#reverseBtn').addEventListener('click', reverseList);
document.querySelector('#clearBtn').addEventListener('click', clearAll);

function render() {
    list.innerHTML = '';

    sessions
        .map((session, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${session.subject} — ${session.minutes} min</span>
                <button onclick="removeSession(${index})">X</button>
            `;
            return li;
        })
        .forEach(li => list.appendChild(li));

    totalSessions.textContent = sessions.length;

    totalMinutes.textContent = sessions.reduce(
        (total, session) => total + session.minutes, 0
    );

    currentSubject.textContent = sessions[0]?.subject || '—';
}

function addSession() {
    const subject = subjectInput.value.trim();
    const minutes = Number(timeInput.value);

    if (!subject || minutes <= 0) return;

    sessions.push({ subject, minutes });

    subjectInput.value = '';
    timeInput.value = '';

    render();
}

function removeSession(index) {
    sessions.splice(index, 1);
    render();
}

function sortByTime() {
    sessions.sort((a, b) => b.minutes - a.minutes);
    render();
}

function reverseList() {
    sessions.reverse();
    render();
}

function clearAll() {
    sessions = [];
    render();
}

render();
