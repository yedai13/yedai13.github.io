var regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var regexTel= /^[0-9]{4}[-]{1}[0-9]{4}$/
var regexCampoTexto=/^[a-zA-Z\s]+$/
const cantidad=0;

function validarContacto (){

    var error=false;
    var mensajeError="";

    if (document.getElementById("nombreapellido").value==""){

        error=true;
        mensajeError+="<p>El campo nombre no puede estar vacio.</p>";

    }else if(!regexCampoTexto.test(document.getElementById("nombreapellido").value)){

        error=true;
        mensajeError+="<p>El nombre no debe contener números.</p>";

    }

    if(!regexEmail.test(document.getElementById("mail").value)){

        error=true;
        mensajeError+="<p>El Email no es valido.</p>";

    }

    if(!regexTel.test(document.getElementById("tel").value)){

        error=true;
        mensajeError+="<p>El teléfono no es valido.</p>";


    }


    if(error){

        document.getElementById("mensaje").innerHTML=mensajeError;
        return false;

    }else {
        document.getElementById("mensaje").innerHTML="El formulario fue completado correctamente";
        return false;
}

}

function contarCaracteresRestantes(){

    var caracteres=document.getElementById("consulta1").value.length;
    
    var restantes=caracteres+cantidad;

    document.getElementById("caracteres").innerHTML=restantes;

}