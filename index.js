function visName(n){
    document.querySelector(`#logoName>div:nth-child(${n})`).style.visibility = "visible";
}

function hidName(n){
    document.querySelector(`#logoName>div:nth-child(${n})`).style.visibility = "hidden";
}

function myFunction(x) {
    x.classList.toggle("change");  
    x.children[3].classList.toggle("mobBarVis");
}

// Theme change
let theme = ["rgb(102,3,47)", "rgb(104,126,169)", "rgb(251,87,70)","rgb(0,188,34)", "rgb(34, 32, 32)"];
let themeName = ["Thanos", "Aladin", "Garfiled", "Hulk", "Jhon Wick"];

let i = Number(localStorage.getItem("themeI"))||theme.length-1;

function changeTheme(x){
   document.querySelector("body").style.backgroundColor=theme[i];
   document.querySelector("#navBar").style.backgroundColor=theme[i];
   x.innerText =themeName[i];
   i++;
   if(i>=theme.length){
    i=0;
   }
   localStorage.setItem("themeI", i);
}
