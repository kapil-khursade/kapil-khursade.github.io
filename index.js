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


