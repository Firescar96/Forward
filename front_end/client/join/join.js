Router.route('/join', function() {
  this.render('join')});

function store(){
  var input_name = document.getElementById("username");
  localStorage.setItem("user_id", input_name.value);
  var storedValue = localStorage.getItem("user_id");
  console.log(storedValue);
}
