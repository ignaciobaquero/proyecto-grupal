//alerta de iniciar sesion


window.addEventListener("load",function(){
    document.getElementById("viewAlert2").addEventListener("click", function(){
        alert("No se ha podido encontrar una cuenta vinculada con ese nombre de usuario.")
    })


})

window.addEventListener("load",function(){
    document.getElementById("viewAlert3").addEventListener("click", function(){
        alert("Usuario duplicado. Intente con otro correo electrónico o nombre de usuario.")
    })


})
if(document.getElementById("password").value!=document.getElementById("password1").value){
    alert("Las contraseñas no coinciden")
}