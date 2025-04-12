let form = document.querySelector("form");
let username = document.getElementById("name");
let email = document.getElementById("email");
let server = document.getElementById("server");
let problem = document.getElementById("problem");
let desc = document.getElementById("description");

form.addEventListener( 'submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    if(username.value.trim() == ""){
        error(username, "Username cannot be blank");
    }else{
        success(username);
    }

    if(email.value.trim() == ""){
        error(email, "Email mustn't be blank");
    }else if (!email.value.trim().endsWith("@palorant.com")){
        error(email, "Email must end with @palorant.com");
    }else{
        success(email);
    }

    if(server.value.trim() == "-"){
        error(server, "Please choose your account server");
    }else{
        success(server);
    }

    if(problem.value.trim() == "-"){
        error(problem, "Please choose your problem");
    }else{
        success(problem);
    }

    if(desc.value.trim() == ""){
        error(desc, "Please fill some information for better understanding")
    }else {
        success(desc);
    }
}

function error(input, massages){
    let form_input = input.parentElement;
    let small = form_input.querySelector("small");
    
    small.innerText = massages;

    form_input.className = "form_input error";
    
    return;
}

function success(input){
    let form_input = input.parentElement;
    form_input.className = "form_input success";
    
    return;
}