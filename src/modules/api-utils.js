export async function addScore(url, user, score) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
}

export async function fetchScores(url) {
  return (await fetch(url)).json();
}
