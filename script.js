const getButton = document.getElementById('btn');
getButton.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();

  const getEmail = document.getElementById('email-input');
  const getErrorMessage = document.getElementsByClassName('error-msg')[0];
  const getErrorIcon = document.getElementsByClassName('error-icon')[0];
  const emailChecker =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 

  if (!getEmail.value) {
    getErrorMessage.classList.add("visible");
    getErrorIcon.classList.add("visible");
    getErrorMessage.textContent = "Please provide a valid email address";
   
  } else if (getEmail.value.match(emailChecker)) {
    getErrorMessage.textContent = " ";
    getErrorIcon.classList.remove("visible");

  } 
}


