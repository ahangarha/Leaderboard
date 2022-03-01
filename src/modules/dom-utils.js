import Leaderboard from './leaderboard.js';
import { fetchScores } from './api-utils.js';

const leaderboardWrapper = document.getElementById('leaderboard-wrapper');
const leaderboardForm = document.getElementById('leaderboard-form');
const refreshButton = document.getElementById('refresh-btn');

const theLeaders = new Leaderboard();

const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const gameID = 'DimCxZfu4FFAkICfsuHw';
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

refreshButton.addEventListener('click', async (event) => {
  event.preventDefault();

  // add loading while fetching data for better UX
  leaderboardWrapper.innerHTML = '<li><p>loading...</p></li>';

  const leaders = (await fetchScores(API_URL)).result;

  // clear existing leaders on the board
  leaderboardWrapper.innerHTML = '';

  // add leaders to the board
  leaders.forEach((leader) => {
    addToPage(leader);
  });
});
