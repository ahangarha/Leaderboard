class Leaderboard {
  constructor(storageName = 'leaders') {
    this.storageName = storageName;
    this.leaders = this.loadFromStorage();
  }

  saveToStorage(data) {
    window.localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  loadFromStorage() {
    return JSON.parse(window.localStorage.getItem(this.storageName)) || [];
  }

  addLeader({ name, score }) {
    this.leaders.push({
      name,
      score,
    });
    this.saveToStorage(this.leaders);
    return { name, score };
  }
}

export default Leaderboard;
