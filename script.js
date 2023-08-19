


function onSubmit() {
    let fName = document.getElementById("firstName");
    let lName = document.getElementById("lastName");
    let mail = document.getElementById("emailAddress");
    let pass = document.getElementById("loginPassword");

    if (fName.value.length < 1) {
        fName.innerText = "";
        document.getElementById("fNameEr").innerText = "First name cannot be empty";
        document.getElementById("firstName").classList.add("errorIcon");
        document.getElementById("firstName").style.border = "1px solid #fb7876";
    }

    if (lName.value.length < 1) {
        fName.innerText = "";
        document.getElementById("lNameEr").innerText = "Last name cannot be empty";
        document.getElementById("lastName").classList.add("errorIcon");
        document.getElementById("lastName").style.border = "1px solid #fb7876";
    }

    if (pass.value.length < 1) {
        fName.innerText = "";
        document.getElementById("passEr").innerText = "Password cannot be empty";
        document.getElementById("loginPassword").classList.add("errorIcon");
        document.getElementById("loginPassword").style.border = "1px solid #fb7876";
    }
let mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.value.match(mailformat)) {
        document.getElementById("mailEr").innerText = "";
    }
        else {
        document.getElementById("mailEr").innerText = "Looks like this is not an email";
        document.getElementById("emailAddress").classList.add("errorIcon");
        document.getElementById("emailAddress").style.border = "1px solid #fb7876"; 
    } 
}


