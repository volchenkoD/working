ymaps.ready(function(){var e=new ymaps.Map("map",{center:[61.24840620901874,73.37225814466093],zoom:17,controls:["smallMapDefaultSet"]});e.controls.get("routeButtonControl"),e.controls.remove("geolocationControl").remove("trafficControl").remove("searchControl"),e.behaviors.disable(["drag","scrollZoom"]);var o=new ymaps.GeoObjectCollection({},{iconLayout:"default#image",iconImageHref:"build/img/index_pages/yellow pointer.png",iconImageSize:[50,54],iconImageOffset:[-3,-40]}),t=new ymaps.Placemark([61.24840620901874,73.37225814466093],{balloonContentHeader:"Магазин Двери и Сейфы",balloonContentBody:"Оптовая и розничная продажа",balloonContentFooter:"Телефон: +7(3462) 91-83-43",hintContent:"Магазин Двери и Сейфы"});o.add(t),e.geoObjects.add(o)});var e,o,t,l,a,c,n=document.querySelectorAll(".slider .card"),r=document.querySelectorAll(".scroll .circle_scroll"),s=0;function i(){for(var e=0;e<n.length;e++)n[e].classList.add("opacity0");for(e=0;e<r.length;e++)r[e].classList.add("active-color");n[s].classList.remove("opacity0"),r[s].classList.remove("active-color"),s+1==n.length?s=0:s++}document.querySelector(".slider").onclick=i,setInterval(i,5e3),e=document.querySelector(".burger"),o=document.querySelector(".nav__links"),t=document.querySelectorAll(".nav__links li"),l=document.querySelector(".page_title"),a=document.querySelector(".img_second"),c=document.querySelector(".second_span"),console.log(l),e.addEventListener("click",function(){o.classList.toggle("nav__active"),e.classList.toggle("toggle"),l.classList.toggle("opacityFirstPage"),a.classList.toggle("opacityFirstPage"),c.classList.toggle("opacityFirstPage")}),t.forEach(function(e,o){e.style.animation="navLinkFade 0.5s ease forwards "+(o/7+1)+"s"});