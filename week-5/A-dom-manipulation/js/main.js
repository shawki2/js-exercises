var mybutton = document.querySelector("#bgrChangeBtn");
var changeColorFunction = function() {
  var box = document.querySelector(".jumbotron");
  box.style.backgroundColor = "blue";
  //alert("Hello");
};
mybutton.addEventListener("click", changeColorFunction);
var mybutton2 = document.querySelector("#alertBtn");
var myAlert = function() {
  //var box = document.querySelector("#alertBtn");
  alert("Hello");
};
mybutton2.addEventListener("click", myAlert);

var myButton3 = document.querySelector("#addTextBtn");
myButton3.addEventListener("click", function() {
  var container = document.querySelector("#box");
  var newParagraph = document.createElement("p");
  newParagraph.style.backgroundColor = "blue";
  newParagraph.id = "myPara";
  newParagraph.innerText = 'Look AT THIS¡¡';
  container.appendChild(newParagraph);
});
