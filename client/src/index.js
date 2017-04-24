// This is our file for requiring other files for webpack
// eg
require('./js/app.jsx');
require('./sass/main.scss');


function render() {
  document.body.innerText = "Test";
}
render();