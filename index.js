// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });
   
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  
const element = document.getElementById('text')

document.addEventListener('DOMContentLoaded', function () {
    element.innerHTML = "This is really cool!";
})