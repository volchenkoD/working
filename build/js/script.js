var e=document.querySelectorAll(".slider .card"),l=document.querySelectorAll(".scroll .circle_scroll"),o=0;document.querySelector(".slider").onclick=function(){for(var c=0;c<e.length;c++)e[c].classList.add("opacity0");for(c=0;c<l.length;c++)l[c].classList.add("active-color");e[o].classList.remove("opacity0"),l[o].classList.remove("active-color"),o+1==e.length?o=0:o++};