const ham = document.querySelector(".cont_hamburger");

const popup = document.querySelector(".cont_menu");

var isActive = false

ham.addEventListener("click", () => {
    
    if(!isActive) {
        popup.classList.add("active");
        popup.classList.remove("inactive");
        isActive = !isActive
    }
    
    else {
        popup.classList.add("inactive");
        popup.classList.remove("active");
        isActive = !isActive
    }
    ham.classList.toggle("active");
})

