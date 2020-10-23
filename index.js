// img carosuel
const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

let pictures = ['assets/Code example.png',
 'assets/example 2.png',
  'assets/Example 3.png',
  'assets/VirtualPet.PNG',
  'assets/VirtualPetAmok.png',
  'assets/virtualpetshelter.PNG'];

img.src = pictures[0];
let position = 0;

moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);

// hamburgermenu 
function toggleMenu(){
  let getMenu = document.querySelector(".navMenu");
  getMenu.classList.toggle('hamburger');
}
let getHamburger = document.querySelector("#toggle-bar");

getHamburger.addEventListener("click", toggleMenu);

// model functionality
var modal = document.getElementById("showSkills");
var btn = document.getElementById("skillsBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function(){
  modal.style.display = "block";
}
span.onclick = function(){
  modal.style.display = "none";
}
window.onclick = function(event){
  if(event.target == modal){
    modal.style.display = "none";
  }
}

// tabs and project description
var i, tabcontent, tablinks;

tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(openProjects).style.display = "block";
  evt.currentTarget.className += " active";



  