const ham = document.querySelector(".cont_hamburger");

const slide = document.querySelector(".cont_menu");

var isActive = false

ham.addEventListener("click", () => {
    
    if(!isActive) {
        slide.classList.add("active");
        slide.classList.remove("inactive");
        isActive = !isActive
    }
    
    else {
        slide.classList.add("inactive");
        slide.classList.remove("active");
        isActive = !isActive
    }
    ham.classList.toggle("active");
});

