// import translations from "./translations.js";
// change language 
// const languageSelector = document.querySelector("select");
// languageSelector.addEventListener("change", (event) => {
//   setLanguage(event.target.value);
//   localStorage.setItem("lang", event.target.value);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const language = localStorage.getItem("lang"); 
//   setLanguage(language);
// });

// const setLanguage = (language) => {
//   const elements = document.querySelectorAll("[data-i8in]");
//   elements.forEach((element) => {
//     const translationKey = element.getAttribute("data-i8in");
//     element.textContent = translations[language][translationKey];
//   });
//   document.dir = language === "ar" ? "rtl" : "ltr";
// };

let show = document.querySelector(".show")
let menu = document.getElementById("menu-btn");
let ul = document.querySelector("ul")

menu.addEventListener('click', ()=>{
  ul.classList.toggle('show')
})


// dark mood

let dark = document.querySelector(".dark");
let light = document.querySelector(".light")

dark.onclick = function(){
  document.body.classList.toggle("dark-mood");
  if(document.body.classList.contains("dark-mood")){
    dark.src = "img/sun.png";
  }else{
    dark.src = "img/moon.png";
  }

}

let nums = document.querySelectorAll(".nun");
let section = document.querySelector(".statistic");
let started =false;

window.onscroll = function(){
  if(window.scrollY >= section.offsetTop){
    if(!started){

      nums.forEach((num)=> startCont(num))
    }
    started = true;
  }
}



function startCont(el){
  let goal = el.dataset.goal;
  let count = setInterval(()=>{
    el.textContent++;
    if(el.textContent === goal){
      clearInterval(count);
    }
  },8500/goal)
}


// select landing page 

let landingPage = document.querySelector('#particles-js');
//  get arrey 
let imgArrey = ["slide1.jpg","slide3.jpg","slide5.jpg","slide6.jpg"];
setInterval(()=>{
    // get random numper 
    let randomNumpur = Math.floor(Math.random() * imgArrey.length);
    // change background img url
    landingPage.style.backgroundImage = 'url("img-slide/'+imgArrey[randomNumpur] +'")';

},3000);

function revealFunction (){
  window.sr = ScrollReveal({duration:650, distance:'250px',
  easing:'ease-out'});
  sr.reveal('.reveal-reset-top',{origin:'top', reset:true});
  sr.reveal('.reveal-reset-bottom',{origin:'bottom', reset:true});
  sr.reveal('.reveal-rotateww',{origin:'bottom', rotate:{z:-1, z:2},
  reset:true
});

}
window.addEventListener('load',()=>{
  revealFunction();
})
