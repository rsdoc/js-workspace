function Alert(title) {
  if (!(this instanceof Alert)) {
    return new Alert(title);
  }

  this.title = title || 'default title';

  // adding instance method to constructor function
  // not recommended way
  // this will add show function to every instance of Alert constructor function
  // which is not good for memory usecase
  //   this.show = function () {
  //     console.log(this.title);
  //   };
}

// moving show method to prototype
Alert.prototype.show = function () {
  console.log(this.title);
};

Alert.prototype.toString = function () {
  return `Alert -> [ to string ] - ${this.title}`;
};

const alert = new Alert('my title');

const alerts = [];

for (let i = 0; i < 10; i++) {
  alerts.push(new Alert(`title ${i}`));
}

// here every alert instance will have show function
console.log(alerts);
