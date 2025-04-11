let form = document.getElementById("report_form");

form.addEventListener ('submit', function(event){
    event.preventDefault();

    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let problem = document.getElementById("problem");
    let description = document.getElementById("description");

    if (username.value == ""){
        alert("Please fill your username");
        return;
    }

    if (email.value == ""){
        alert("Please fill your email");
        return;
    }

    if (problem.value == "-"){
        alert("Please choose your problem");
        return;
    }

    if (!email.value.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com");
        return;
    }

    if (description.value == ""){
        alert("Please fill a brief description of your problem for better understanding");
        return;
    }

    alert("Register Success");
})