class NightModeToggle {
  constructor() {
    this.body = document.querySelector('body');
    this.className = 'is-night';
    this.intervalTime = 4000;
  }

  toggleClass() {
    this.body.classList.toggle(this.className);
  }

  startInterval() {
    setInterval(() => {
      this.toggleClass();
    }, this.intervalTime);
  }
}

export default NightModeToggle;