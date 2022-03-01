import Leaderboard from './leaderboard.js';

const leaderboardWrapper = document.getElementById('leaderboard-wrapper');
const leaderboardForm = document.getElementById('leaderboard-form');

const theLeaders = new Leaderboard();

function addToPage({ name, score }) {
  const li = document.createElement('li');
  const nameElement = document.createElement('p');
  nameElement.innerText = name;
  const scoreElement = document.createElement('span');
  scoreElement.innerText = score;
  li.appendChild(nameElement);
  li.appendChild(scoreElement);

  leaderboardWrapper.appendChild(li);
}

function addNewScore(name, score) {
  const newLeader = theLeaders.addLeader({ name, score });
  if (newLeader) addToPage(newLeader);
}

leaderboardForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const score = event.target.score.value;

  addNewScore(name, score);

  event.target.name.value = '';
  event.target.score.value = '';
});

function init() {
  const leaders = theLeaders.loadFromStorage();
  leaders.forEach((leader) => {
    addToPage(leader);
  });
}

init();
