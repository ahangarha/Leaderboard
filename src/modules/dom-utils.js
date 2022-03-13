import { addScore, fetchScores } from './api-utils.js';

const leaderboardWrapper = document.getElementById('leaderboard-wrapper');
const leaderboardForm = document.getElementById('leaderboard-form');
const refreshButton = document.getElementById('refresh-btn');

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameID = 'DimCxZfu4FFAkICfsuHx';
const API_URL = `${URL}/games/${gameID}/scores/`;

function addToPage({ user, score }) {
  const li = document.createElement('li');
  const userElement = document.createElement('p');
  userElement.innerText = user;
  const scoreElement = document.createElement('span');
  scoreElement.innerText = score;
  li.appendChild(userElement);
  li.appendChild(scoreElement);

  leaderboardWrapper.appendChild(li);
}

async function refreshLeaderboard() {
  // add loading while fetching data for better UX
  leaderboardWrapper.innerHTML = '<li><p>loading...</p></li>';

  const leaders = (await fetchScores(API_URL)).result;
  const sortedLeaders = leaders.sort((a, b) => b.score - a.score);

  // clear existing leaders on the board
  leaderboardWrapper.innerHTML = '';

  // add leaders to the board
  sortedLeaders.forEach((leader) => {
    addToPage(leader);
  });
}

async function addNewScore(user, score) {
  const response = await addScore(API_URL, user, score);

  if (response.status === 201) {
    refreshLeaderboard();
  }
}

leaderboardForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const score = event.target.score.value;

  addNewScore(name, score);

  event.target.name.value = '';
  event.target.score.value = '';
});

refreshButton.addEventListener('click', async (event) => {
  event.preventDefault();
  refreshLeaderboard();
});
