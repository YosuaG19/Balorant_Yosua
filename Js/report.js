let form = document.querySelector(".fill");
let popup = document.querySelector(".popup");
let username = document.getElementById("name");
let email = document.getElementById("email");
let server = document.getElementById("server");
let problem = document.getElementById("problem");
let desc = document.getElementById("description");
let closing = document.getElementById("close");

let valid = false;

closing.addEventListener('click', () => {
    popup.classList.add("no_active");
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    valid = checkInputs();

    if (valid) {
        popup.classList.remove("no_active");
        form.reset();
    }
});

function checkInputs() {
    // clearErrors();

    let name_t = false;
    let email_t = false;
    let server_t = false;
    let problem_t = false;
    let desc_t = false;

    if (username.value.trim() === "") {
        error(username, "Username cannot be blank");
    } else {
        name_t = true;
        clearErrors(username);
    }

    if (email.value.trim() === "") {
        error(email, "Email mustn't be blank");
    } else if (!email.value.trim().endsWith("@palorant.com")) {
        error(email, "Email must end with @palorant.com");
    } else {
        email_t = true;
        clearErrors(email);
    }

    if (server.value.trim() === "-") {
        error(server, "Please choose your account server");
    } else {
        server_t = true;
        clearErrors(server);
    }

    if (problem.value.trim() === "-") {
        error(problem, "Please choose your problem");
    } else {
        problem_t = true;
        clearErrors(problem);
    }

    if (desc.value.trim() === "") {
        error(desc, "Please fill some information");
    } else {
        desc_t = true;
        clearErrors(desc);
    }

    return name_t && email_t && server_t && problem_t && desc_t;
}

function error(input, message) {
    let form_input = input.parentElement;
    let small = form_input.querySelector("small");

    small.innerText = message;
    form_input.classList.add("error");
}

function clearErrors(input) {
    let form_input = input.parentElement;
    form_input.classList.remove("error");
}

console.log("report.js loaded ✅");
