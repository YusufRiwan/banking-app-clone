
const logIn = document.getElementById("logIn");
logIn.addEventListener("click", function(e){
    e.preventDefault();


    const userName = document.getElementById("name").value
    const password = document.getElementById("password").value

    if(userName.trim()==="" || password.trim() === ""){
        alert("Pls Input Your Details")   
    }else{
        sessionStorage.setItem("userName", userName);
        window.location.href = "./home.html"
    }
    

})

