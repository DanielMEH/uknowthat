
function suscribirse() {

    var uknow = document.getElementById('suscribirseU').value;
    var email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

    if (uknow == "" ) {
        document.querySelector('.validaciones').innerHTML="<i class='fas fa-exclamation-circle'></i> Este campo esta vacio";
        return;
    }else if(!email.exec(uknow)){
        document.querySelector('.validaciones').innerHTML="<i class='fas fa-exclamation-circle'></i> Ingrese un correo valido";
        return;
    }

   var http = new XMLHttpRequest();
   var method = "POST";
   var URL = "ajax/suscribirse.ajax.php";

   http.onreadystatechange = function () {
       if (this.readyState == 4 && this.status == 200) {
           var response = this.responseText;
           if (response == "camp_no") {
            document.querySelector('.validaciones').innerHTML="<i class='fas fa-exclamation-circle'></i> Este campo esta vacio"

           }else if(response == "email_v"){
            document.querySelector('.validaciones').innerHTML="<i class='fas fa-exclamation-circle'></i> Ingrese un correo valido";

           }else if (response == "Y_EXIST") {
            document.querySelector('.validaciones').innerHTML="<i class='fas fa-exclamation-circle'></i> Este usuario ya existe";
           }else if(response == "ERROR"){
            document.querySelector('.validaciones').innerHTML="<i class='fas fa-exclamation-circle'></i> Error al enviar los datos";

           }else if (response == "OK") {
               alert('Gracias por registrarse')
               document.getElementById('form_suscr').reset();
               document.querySelector('.validaciones').classList.add('bat')
               window.location = "uknow.html";
               return;
           }
       }
   }
   http.open(method, URL, true);
   http.setRequestHeader("content-type", "application/x-www-form-urlencoded");
   http.send("satpa=" + uknow);
  
}
