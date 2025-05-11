import { submit } from "./index.js";
import { emailValidation, noValidation } from "./validation.js";


document.getElementById("submitBtn").addEventListener("click", submit);
document.getElementById("email").addEventListener("input", emailValidation);
document.getElementById("mobile").addEventListener("input", noValidation);
