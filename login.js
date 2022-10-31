//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

//Password
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");

//Submit
let submitButton = document.getElementById("submit-button");

//Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");
console.log(submitButton);
const passwordVerify = (password) => {
    return password.length >= 8;
};
  
//Text verification (if input contains only text)
const textVerify = (text) => {
    const regex = /^[a-zA-Z]{3,}$/;
    return regex.test(text);
};
const emailVerify = (input) => {
    const regex = /^([!#-'+/-9=?A-Z^-~-]+(.[!#-'+/-9=?A-Z^-~-]+)|"([]!#-[^-~ \t]|(\[\t -~]))+")@([!#-'+/-9=?A-Z^-~-]+(.[!#-'+/-9=?A-Z^-~-]+)|[[\t -Z^-~]*])$/;
    return regex.test(input);
};
const emptyUpdate = (
    inputReference,
    emptyErrorReference,
    otherErrorReference
  ) => {
    if (!inputReference.value) {
      //input is null/empty
      emptyErrorReference.classList.remove("hide");
      otherErrorReference.classList.add("hide");
      inputReference.classList.add("error");
    } else {
      //input has some content
      emptyErrorReference.classList.add("hide");
    }
};
const errorUpdate = (inputReference, errorReference) => {
    errorReference.classList.remove("hide");
    inputReference.classList.remove("valid");
    inputReference.classList.add("error");
};
const validInput = (inputReference) => {
    inputReference.classList.remove("error");
    inputReference.classList.add("valid");
};
emailInput.addEventListener("input", () => {
    if (emailVerify(emailInput.value)) {
      emailError.classList.add("hide");
      validInput(emailInput);
    } else {
      errorUpdate(emailInput, emailError);
      emptyUpdate(emailInput, emptyEmailError, emailError);
    }
});
passwordInput.addEventListener("input", () => {
    if (passwordVerify(passwordInput.value)) {
      passwordError.classList.add("hide");
      validInput(passwordInput);
    } else {
      errorUpdate(passwordInput, passwordError);
      emptyUpdate(passwordInput, emptyPasswordError, passwordError);
    }
});
//verifyPasswordInput.addEventListener("input", () => {
 //   if (verifyPasswordInput.value === passwordInput.value) {
 //     verifyPasswordError.classList.add("hide");
  //    validInput(verifyPasswordInput);
 //   } else {
  //    errorUpdate(verifyPasswordInput, verifyPasswordError);
 //     emptyUpdate(passwordInput, emptyVerifyPasswordError, verifyPasswordError);
 //   }
 // });
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (validClasses.length == 2 && invalidClasses.length == 0) {
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value
            }),
        })
    .then((response) => {
        if(response.status==200)
            return response.json()

        throw true;
    })

    .then((data) => {
        console.log('Success:', data);
        window.location.href="teste.html";
    })
    .catch((error) => {
        alert("Usuario não Existente");
        console.error('Error:', error);
    });
    } else {
      alert("Error");
    }
});