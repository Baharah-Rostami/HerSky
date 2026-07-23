// =============================
// COUNTER ANIMATION
// =============================


const counters = document.querySelectorAll(".info-box h4");


counters.forEach(counter => {


counter.innerText = "0";


const updateCounter = () => {


const target = +counter.getAttribute("data-target");


const current = +counter.innerText;


const increment = target / 100;



if(current < target){


counter.innerText = Math.ceil(current + increment);


setTimeout(updateCounter,20);


}

else{


counter.innerText = target + "+";


}


};



updateCounter();


});




// =============================
// SCROLL REVEAL ANIMATION
// =============================


const revealElements = document.querySelectorAll(
".why-card, .mission-item, .theme-item, .flip-card, .gallery-item"
);



const reveal = () =>{


revealElements.forEach(element=>{


const windowHeight = window.innerHeight;


const elementTop = element.getBoundingClientRect().top;


const visible = 100;



if(elementTop < windowHeight - visible){


element.classList.add("show");


}


});


};



window.addEventListener("scroll", reveal);


reveal();