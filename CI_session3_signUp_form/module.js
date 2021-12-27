class SignIn {
    $container;
    $title;
    $inputUserName;
    $inputPassword;
    $buttonSignIn;
    // $checkboxSignIn;

    constructor () {
        this.$container = document.createElement("div");
        this.$container.id = "container";
        this.$container.classList.add("d-flex", "container");
    
       this.$title = document.createElement("h1");
       this.$title.innerText = "Sign In";

       this.$inputUserName = document.createElement("input");
       this.$inputUserName.placeholder = "Enter your email";
       this.$inputUserName.classList.add ("mt-3");
       this.$inputUserName.type = "email";

       this.$inputPassword = document.createElement("input");
       this.$inputPassword.placeholder = "Enter your password";
       this.$inputPassword.classList.add ("mt-3");
       this.$inputPassword.type = "password";


       this.$buttonSignIn = document.createElement("input");
       this.$buttonSignIn.classList.add("btn", "btn-success", "mt-3");
       this.$buttonSignIn.addEventListener("click", this.handleSubmit);
       this.$buttonSignIn.value = "Sign In";
       }

       handleSubmit = () => {
           console.log("SignIN");
           this.$inputUserName.value = "";
           this.$inputPassword.value = "";

       }
       render () {
           this.$container.append(this.$title, this.$inputUserName, this.$inputPassword, this.$inputPassword, this.$buttonSignIn )
           return this.$container;
       }
}





export default SignIn;

