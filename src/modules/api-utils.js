async function fetchScores(url) {
  return (await fetch(url)).json();
}

module.exports = {
  fetchScores,
};
