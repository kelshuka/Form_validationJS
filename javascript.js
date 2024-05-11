
const form = document.querySelector("form");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");

const zip = document.getElementById("zipC");
const zipError = document.querySelector("#zipC + span.error");

const password = document.getElementById("passWord");
const passwordError = document.querySelector("#passWord + span.error");

const passwordCon = document.getElementById("passwordCon");
const passConError = document.querySelector("#passWordCon + span.error");


function showErrorEmail() {
    if (email.validity.valueMissing) {
        // If the field is empty, display the following error message.
        emailError.textContent = "You need to enter an email address.";
    } else if (email.validity.typeMismatch) {
        // If the field doesn't contain an email address, display the 
        // following error message.
        emailError.textContent ="Entered value needs to be an email address.";
    } else if (email.validity.tooShort) {
        // If the data is too short, display the following error message.
        emailError.textContent = `Email should be at least ${email.minLength}
         characters; you entered ${email.value.length}.`;
    }
    // Set the styling appropriately
    emailError.className = "error active";
}

email.addEventListener("input", (event) => {
    if (email.validity.valid) {
        emailError.textContent = "";
        emailError.className = "error";
    } else {
        showErrorEmail();
        event.preventDefault();
    }
});

function showErrorCountry() {
    if (country.validity.valueMissing) {
        countryError.textContent = "You need to enter a country name.";
    } else if (country.validity.tooShort) {
        countryError.textContent = `Country name should be at least ${country.minLength}
         characters; you entered ${country.value.length}.`;
    }
    // Set the styling appropriately
    countryError.className = "error active";
}
country.addEventListener("input", (event) => {
    if (country.validity.valid) {
        countryError.textContent = "";
        countryError.className = "error";
    } else {
        showErrorCountry();
        event.preventDefault();
    }
});

function showErrorZip() {
    if (zip.validity.valueMissing) {
        zipError.textContent = "Please enter your Zip Code.";
    } else if (zip.validity.tooShort) {
        zipError.textContent = `Zip code should be at least ${zip.minLength}
        characters; you entered ${zip.value.length}.`;
    }
    zipError.className = "error active";
}
zip.addEventListener("input", (event) => {
    if (zip.validity.valid) {
        zipError.textContent = "";
        zipError.className = "error";
    } else {
        showErrorZip();
        event.preventDefault();
    }
});

function showErrorPassword() {
    if (password.validity.valueMissing) {
        passwordError.textContent
         = `Please enter your password, at least ${password.minLength} char, should include at least 1 upper case, 1 lower case and 1 number.`;
    } else if (password.validity.typeMismatch) {
        passwordError.textContent = "Password should include at least 1 upper case, 1 lower case and 1 number.";
    } else if (password.validity.tooShort) {
        passwordError.textContent = `Password should be at least ${password.minLength} characters;
        you entered ${password.value.length}`;
    }
    passwordError.className = "error active";
}
password.addEventListener("input", (event) => {
    if (password.validity.valid) {
        passwordError.textContent = "";
        passwordError.className = "error";
    } else {
        showErrorPassword();
        event.preventDefault();
    }
});


//function showErrorConPassword() {
//    if (passwordCon.validity.valueMissing) {
//        passConError.textContent = "Please confirm the password.";
//        passConError.className = "error active";
 //   } else if (password.value !== passwordCon.value) {
 //       passwordCon.setCustomValidity("password mismatch!");
 //       passConError.textContent = "password mismatch!";
 //       passConError.className = "error active";
 //   } else {
 //       passwordCon.setCustomValidity("");
 //       passConError.textContent = "";
 //       passConError.className = "error";
 //   }
//}

//passwordCon.addEventListener("input", (event) => {
 //   showErrorConPassword();    
//});


form.addEventListener("submit", (event) => {
    if (!email.validity.valid){
        showErrorEmail();
        event.preventDefault();
    } else if (!country.validity.valid) {
        showErrorCountry();
        event.preventDefault();
    } else if (!zip.validity.valid) {
        showErrorZip();
        event.preventDefault();
    } else if (!password.validity.valid) {
        showErrorPassword();
        event.preventDefault();
    } //else if (password.value !== passwordCon.value) {
      //  showErrorConPassword();
      //  event.preventDefault();
      //  event.stopPropagation();
    //} 
});
