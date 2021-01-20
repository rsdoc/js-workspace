class Alert {
  constructor(title) {
    this.title = title || 'default title';
  }

  show() {
    console.log(this.title);
  }

  toString() {
    return `Alert -> [ to  string ] - ${this.title}`;
  }
}

const alert = new Alert('my title');

const alerts = [];

for (let i = 0; i < 10; i++) {
  alerts.push(new Alert(`title ${i}`));
}

// here every alert instance will have show function
console.log(alerts);
