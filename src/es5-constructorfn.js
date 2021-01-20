// by convention - when we define a function with capital case

function Alert(title) {
  this.title = title || 'default alert';
}

// typically we invoke function like Alert()
// Alert(); - not recommended

// but in case of constructor function we instantiate with  new keyword
// new Alert('paramter title');

// by default constructor function returns its instance, this means we store that in a variable and use that
var alert = new Alert('parameter title');
console.log(alert);
// Alert { title: "parameter title", __proto__: {...}}
