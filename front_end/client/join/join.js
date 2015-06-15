Router.route('/join', function() {
  this.render('join')});

function store(){
  var input_name = $("#username").val();
  localStorage.setItem("user_id", input_name);
  var storedValue = localStorage.getItem("user_id");
  console.log(storedValue);
}
