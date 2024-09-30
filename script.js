
function getResults(){
  var score = 0;
  var cardboard = document.getElementById("cardboard").checked;
  var r = document.getElementById("reduce").checked;
  if(cardboard){
    score++;
  }
  if(r){
    score++;
  }
    
  if(score==1){
    document.getElementById("output").innerHTML = "You got 50% correct";
  }
  else if(score==2){
    document.getElementById("output").innerHTML = "You got 100% correct!";
  }
  else{
    document.getElementById("output").innerHTML = "You didn't get any correct...";
  }

  document.getElementById("food").checked = false;
  document.getElementById("cardboard").checked = false;
  document.getElementById("styrofoam").checked = false;
  document.getElementById("repair").checked = false;
  document.getElementById("replace").checked = false;
  document.getElementById("reduce").checked = false;

}