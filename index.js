import home from "./pages/home/index.js";
import cadastro from "./pages/cadastro/index.js";
import login from "./pages/login/index.js";
import dashboard from "./pages/dashboard/index.js";
import dashboard1 from "./pages/dashboard/index1.js";
const btn=document.getElementById("btn-entrar");
const btn1=document.getElementById("btn-participe");
const main=document.querySelector('#root');

const http = require('http');
let server = http.createServer{(req, res) => {
 console.log(req.headers); });
  
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
        submitButton.addEventListener("click", (e) => {
            e.preventDefault();
            if (validClasses.length == 2 && invalidClasses.length == 0) {
            fetch('https://ec2-3-88-184-58.compute-1.amazonaws.com/auth/login', {
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
                localStorage.setItem("token",data.token);
                if(data.admin){
                  window.location.hash="dashboard";
                  return;
                }
                btn.style.display = 'none';
                window.location.hash="dashboard1";

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
        let submit = document.getElementById("submit");
        submit.addEventListener("click", (e) => {
          e.preventDefault();
         
          fetch('https://ec2-3-88-184-58.compute-1.amazonaws.com/auth/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  name: username.value,
                  email: email.value,
                  password: password.value,
                  confirmpassword: password2.value

                  }),
              })
          .then((response) => {
              
                  return response.json()


          })

          .then((data) => {
              window.location.hash="login";
          })
          .catch((error) => {
              alert("Erro ao cadastrar");
              console.error('Error:', error);
          });
          
      });
      
        break;
      case "#dashboard":
          btn.style.display = 'none';
          btn1.style.display = 'none';
          if(logado()){
            main.appendChild(dashboard());
            const token=localStorage.getItem("token");
            console.log(token)
            const lista=document.getElementById("lista");
            const form = document.getElementById('uploadForm')

            const sendFiles = async () => {
            // Object 
            const myFiles = document.getElementById('myFiles').files

            const formData = new FormData()

            Object.keys(myFiles).forEach(key => {
                formData.append(myFiles.item(key).name, myFiles.item(key))
            })

            const response = await fetch('https://ec2-3-88-184-58.compute-1.amazonaws.com/upload', {
                method: 'POST',
                body: formData,
                headers: {
                  "Authorization":"Bearer "+token
                }
            })

            const json = await response.json()

            const h2 = document.querySelector('h2')
            h2.textContent = `Status: ${json?.status}`

            const h3 = document.querySelector('h3')
            h3.textContent = json?.message

            console.log(json)
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()
            sendFiles()
        })
          }
          else{
            window.location.hash="login";
          }
          break;
      case "#dashboard1":
        btn.style.display = 'none';
        btn1.style.display = 'none';
        if(logado()){
          main.appendChild(dashboard1());
          const lista=document.getElementById("lista");
          let image = document.getElementById("image");      
          fetch("https://ec2-3-88-184-58.compute-1.amazonaws.com/fotos")
              .then((response) => {
                return response.json();
              })
    
              .then((imgs) => {
                for(let img of imgs){
                   let newimage=document.createElement('img');
                  newimage.src = img.url;
                  lista.appendChild(newimage);
                }
                console.log('Success:', data);
               
              })
              .catch((error) => {
                console.error('Error:', error);
              });
        }
        else{
          window.location.hash="login";
        }
      default:
        main.appendChild(home());
    }
  })
}
window.addEventListener("load", ()=>{
  main.appendChild(home());
  init();
})
