class Alert {
  constructor(title) {
    this.title = title || 'default title';
  }
}

const alert = new Alert('custom title');

console.log(alert.title);
