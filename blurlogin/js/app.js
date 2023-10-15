const icon = document.querySelector(".pweye i");
const input = document.getElementById("password");
icon.addEventListener("click", () => {
    console.log("click");
    if(icon.classList.contains("fa-eye-slash")){
        console.log("click if");
        icon.setAttribute("class", "fa-solid fa-eye");
        input.type = "password";
    }else{
        console.log("click else");
        icon.setAttribute("class", "fa-solid fa-eye-slash");
        input.type = "text";
    }
});