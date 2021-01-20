// constructor function
function Alert(title) {
  // when constructor function is called with new keyword
  // this - is an instance of Alert constructor function

  // adding check for constructor function as guard
  if (!(this instanceof Alert)) {
    return new Alert(title);
  }

  this.title = title || 'default alert';
}

// it gets called with new keyword
// this - inside alert function will be an instance of Alert function
// by default constructor function returns its instance
const alertCtor = new Alert('recommended way');

console.log(alertCtor);

// alertCtor is an instance of Alert constructor function

// now when we call Alert directly as a function like Alert() without new keyword
// this - window object
const alert = Alert('not recommended');
console.log(alert);
// alert is undefined as Alert() function is called directly and it will not return anything
