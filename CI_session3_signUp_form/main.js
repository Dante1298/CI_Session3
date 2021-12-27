import SignIn from "./module.js";

const SignInForm = new SignIn("SignInform");

let main = document.getElementById("main");
document.getElementById("main").append(SignInForm.render());