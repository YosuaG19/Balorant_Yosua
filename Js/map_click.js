const map1 = document.getElementById("map_cont1");
const map2 = document.getElementById("map_cont2");
const map3 = document.getElementById("map_cont3");
const map4 = document.getElementById("map_cont4");
const map5 = document.getElementById("map_cont5");

map1.addEventListener("click", () => {
    map1.classList.toggle("active");
})
map2.addEventListener("click", () => {
    map2.classList.toggle("active");
})
map3.addEventListener("click", () => {
    map3.classList.toggle("active");
})
map4.addEventListener("click", () => {
    map4.classList.toggle("active");
})
map5.addEventListener("click", () => {
    map5.classList.toggle("active");
})