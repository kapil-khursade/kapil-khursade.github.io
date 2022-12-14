// Visibility of the  logo name
function visName(n){
    document.querySelector(`#logoName>div:nth-child(${n})`).style.visibility = "visible";
}
function hidName(n){
    document.querySelector(`#logoName>div:nth-child(${n})`).style.visibility = "hidden";
}

// This is mobile navbar option
function myFunction(x) {
    x.classList.toggle("change");  
    x.children[3].classList.toggle("mobBarVis");
}

// Theme change
let theme = ["rgb(69,38,47)", "rgb(104,126,169)", "rgb(40,51,45)", "rgb(252,100,0)","rgb(129,170,29)", "rgb(93,50,23)", "rgb(34, 32, 32)"];
let themeName = ["Thanos", "Aladdin", "Gabbar Shing", "Garfiled", "Hulk", "Shingham", "Jhon Wick"];

let i = 0;

function changeTheme(x){
   document.querySelector("body").style.backgroundColor=theme[i];
   document.querySelector("#nav").style.backgroundColor=theme[i];
   x.innerText =themeName[i];
   i++;
   if(i>=theme.length){
    i=0;
   }
   localStorage.setItem("themeI", i);
}

// Navbar code
var util = {

    scrollEvent() {
      var scrollPosition = $(document).scrollTop();
  
      $.each(util.scrollMenuIds, function (i) {
        var link = util.scrollMenuIds[i],
          container = $(link).attr("href"),
          containerOffset = $(container).offset().top,
          containerHeight = $(container).outerHeight(),
          containerBottom = containerOffset + containerHeight;
  
        if (
          scrollPosition < containerBottom-120
           &&
          scrollPosition >= containerOffset-120
        ) {
          $(link).addClass("active");
        } else {
          $(link).removeClass("active");
        }
      });
    }
  };
  
  $(document).ready(function () {
    util.scrollMenuIds = $("a.nav-link[href]");
    $("#menu").click(util.mobileMenu);
    $(window).resize(util.windowResize);
    $(document).scroll(util.scrollEvent);
  });
  