/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/
//var myRequest = document.querySelector("#greeting-text");
var mybutton = document.querySelector("#fetchButton");
var changeButton = function() {
  var box = document.querySelector("#greeting-text");

  fetch("https://codeyourfuture.herokuapp.com/api/greetings")
    //fetch("https://www.facebook.com")
    //fetch("https://codeyourfuture.slack.com/messages/C7MADBDU1/")
    .then(function(response) {
      return response.text();
    })
    .then(function(greeting) {
      var container = document.querySelector("#greeting-text");
      container.innerText = greeting;
      // conole.log(greeting);// Write the code to display the greeting text here
    });
};
mybutton.addEventListener("click", changeButton);
