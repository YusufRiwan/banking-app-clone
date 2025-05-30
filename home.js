
 let name = sessionStorage.getItem('userName')
 let userName = document.getElementById("user_name"); 
 userName.textContent = `${name},`;


document.getElementById("logOut").addEventListener("click", function(){
    sessionStorage.removeItem("userName");
    window.location.href = "./form.html"
})