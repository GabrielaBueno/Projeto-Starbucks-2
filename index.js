import home from "./pages/home/index.js";
import cadastro from "./pages/cadastro/index.js";
import login from "./pages/login/index.js";
import dashboard from "./pages/dashboard/index.js";
const btn=document.getElementById("btn-entrar");
const btn1=document.getElementById("btn-participe");
const main=document.querySelector('#root');

function logado(){
  return localStorage.getItem("token");
}
const init=()=>{
  window.addEventListener("hashchange", ()=>{
    main.innerHTML="";
    switch(window.location.hash){
      case "":
        main.appendChild(home());
        break;
      case "#login":
        main.appendChild(login());
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
            return password.length >= 1;
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
            fetch('http://localhost:3000/auth/login', {
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
                
                    return response.json()


            })

            .then((data) => {
                console.log('Success:', data);
                localStorage.setItem("token",data.token);
                btn.style.display = 'none';
                window.location.hash="dashboard";
            })
            .catch((error) => {
                alert("Usuario não Existente");
                console.error('Error:', error);
            });
            } else {
              alert("Error");
            }
        });
        break;
      case "#cadastro":
        main.appendChild(cadastro());
        const form = document.getElementById('form');
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const password2 = document.getElementById('password2');
        
        form.addEventListener('submit', e => {
            e.preventDefault();
        
            validateInputs();
        });
        
        const setError = (element, message) => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
        
            errorDisplay.innerText = message;
            inputControl.classList.add('error');
            inputControl.classList.remove('success')
        }
        
        const setSuccess = element => {
            const inputControl = element.parentElement;
            const errorDisplay = inputControl.querySelector('.error');
        
            errorDisplay.innerText = '';
            inputControl.classList.add('success');
            inputControl.classList.remove('error');
        };
        
        const isValidEmail = email => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        
        const validateInputs = () => {
            const usernameValue = username.value.trim();
            const emailValue = email.value.trim();
            const passwordValue = password.value.trim();
            const password2Value = password2.value.trim();
        
            if(usernameValue === '') {
                setError(username, 'Nome é obrigatório');
            } else {
                setSuccess(username);
            }
        
            if(emailValue === '') {
                setError(email, 'Email é obrigatorio');
            } else if (!isValidEmail(emailValue)) {
                setError(email, 'Digite um e-mail valido');
            } else {
                setSuccess(email);
            }
        
            if(passwordValue === '') {
                setError(password, 'Senha é obrigatorio');
            } else if (passwordValue.length < 8 ) {
                setError(password, 'A senha deve ter no minimo 8 caracteres.')
            } else {
                setSuccess(password);
            }
        
            if(password2Value === '') {
                setError(password2, 'Por favor confirme sua senha');
            } else if (password2Value !== passwordValue) {
                setError(password2, "Senhas Diferentes");
            } else {
                setSuccess(password2);
            }
        
        };
        
        break;
        case "#dashboard":
          btn.style.display = 'none';
          btn1.style.display = 'none';
          if(logado()){
            main.appendChild(dashboard());
            const lista=document.getElementById("lista");
            let submitButton = document.getElementById("submit-button");
            let image = document.getElementById("image");
            let num = document.getElementById("number");
            
            submitButton.addEventListener("click", (e) => {
            e.preventDefault();
            lista.innerHTML="";
              for(let i=0;i<num.value;i++){
                fetch("https://randomfox.ca/floof/")
                .then((response) => {
                  return response.json();
                })
      
                .then((data) => {
                  console.log('Success:', data);
                  let newimage=document.createElement('img');
                  newimage.src = data.image;
                  lista.appendChild(newimage);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
              }
            
  
  })
          }
          else{
            window.location.hash="login";
          }
          break;
      default:
        main.appendChild(home());
    }
  })
}
window.addEventListener("load", ()=>{
  main.appendChild(home());
  init();
})
