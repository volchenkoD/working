var dives = document.querySelectorAll('.slider .card');
var dotes = document.querySelectorAll('.scroll .circle_scroll');
var current = 0;
var index = 0;
function slider() {
    for(var i = 0; i < dives.length; i++){
        dives[i].classList.add("opacity0");
    }
    for(var i = 0; i < dotes.length; i++){
        dotes[i].classList.add("active-color");
    }
    dives[current].classList.remove("opacity0");
    dotes[current].classList.remove("active-color");
    if(current + 1 == dives.length){
        current = 0;
    }else{
        current++;
    }
}
document.querySelector('.slider').onclick = slider;
//setInterval(slider, 5000);