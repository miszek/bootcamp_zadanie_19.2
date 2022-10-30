function checkPasswd() {

    clearElement("password-div");

    let passwd = document.getElementById("passwd").value;

    if(!/\S{8,}/.test(passwd)) {
        addLabel("minimum 8 znaków", "password-div");
    }

    if(!/[A-Z]+/.test(passwd)) {
        addLabel("minimum 1 wielka litera", "password-div");
    }

    if(!/[a-z]+/.test(passwd)) {
        addLabel("minimum 1 mała litera", "password-div");
    }

    if(!/\W+/.test(passwd)) {
        addLabel("minimum 1 znak specjalny", "password-div");
    }

    comparePasswd();
}


function comparePasswd() {

    clearElement("password-check-div");

    let passwdRep = document.getElementById("passwd-check").value;
    let passwd = document.getElementById("passwd").value;
    if(!(passwd == passwdRep)) {
        addLabel("hasła różnią się od siebie", "password-check-div");
    }
}

function addLabel(text, element) {
    let label = document.createElement("label");
    label.innerHTML = text + "<br>";
    document.getElementById(element).appendChild(label);
}

function clearElement (element) {
    let clearElement = document.getElementById(element);
    clearElement.innerHTML = '';
}
