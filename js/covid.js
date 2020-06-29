var regexEmail=/^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
var regexTel= /^[0-9]{4}[-]{1}[0-9]{4}$/
var regexCampoTexto=/^[a-zA-Z\s]+$/
var regexNumeros= /^[0-9]{8}$/
const cantidad=0;

function ocultar(){
    var opciones=document.getElementsByName("viaje");

    for(i in opciones){
        if(opciones[i].value=="si" && opciones[i].checked){
            document.getElementById("pais").style.display="block";
        }
        if(opciones[i].value=="no" && opciones[i].checked){
            document.getElementById("pais").style.display="none";
        }
    }

   


}

function direccion(){
    var opciones1=document.getElementsByName("respirar");

    for(i in opciones1){
        if(opciones1[i].value=="si" && opciones1[i].checked){
            document.getElementById("direcciones").style.display="block";
            
        }
        if(opciones1[i].value=="no" && opciones1[i].checked){
            document.getElementById("direcciones").style.display="none";
        }
    }
}

function validar(){

    var error=false;
    var mensajeError="";
    var contar=0;

    if (document.getElementById("nombre").value==""){

        error=true;
        mensajeError+="<p>El Campo nombre es obligatorio.</p>";

    }else if(!regexCampoTexto.test(document.getElementById("nombre").value)){
        error=true;
        mensajeError+= "<p> El nombre no debe contener numeros. </p>";
    }
    
    if (document.getElementById("dni").value==""){
        error=true;
        mensajeError+= "<p> El campo DNI es obligatorio.</p>"; 
    }else if(!regexNumeros.test(document.getElementById("dni").value)){
        error=true;
        mensajeError+= "<p> El campo no debe contener letras ni signos </p>";
    }

    if(document.getElementById("telefono").value==""){
        error=true;
        mensajeError+="<p> El campo telefono es obligatorio </p>";
    }else if(!regexTel.test(document.getElementById("telefono").value)){
        error=true;
        mensajeError+= "<p> El teléfono no es valido.</p>";
    }

    var opciones1=document.getElementsByName("viaje");
    var seleccionado=false;
    for(i in opciones1){

        if(opciones1[i].checked){
            seleccionado=true;
        }

    }
    if(!seleccionado){

        mensajeError+="<p>El campo viaje no puede estar vacio</p>";

    }

    var opciones2=document.getElementsByName("fiebre");
    for(i in opciones2){

        if(opciones2[i].checked){
            seleccionado=true;
           
        }

        if (opciones2[i].value=="si" && opciones2[i].checked ){

            contar++;
        }

    }
    if(!seleccionado){

        mensajeError+="<p>El campo fiebre no puede estar vacio</p>";

    }

    var opciones3=document.getElementsByName("cabeza");
    for(i in opciones3){

        if(opciones3[i].checked){
            seleccionado=true;
            
        }

        if (opciones3[i].value=="si" && opciones3[i].checked ){

            contar++;
        }

    }
    if(!seleccionado){

        mensajeError+="<p>El campo dolor de cabeza no puede estar vacio</p>";

    }

    var opciones4=document.getElementsByName("tos");
    for(i in opciones4){

        if(opciones4[i].checked){
            seleccionado=true;
            
        }

        if (opciones4[i].value=="si" && opciones4[i].checked ){

            contar++;
        }

    }
    if(!seleccionado){

        mensajeError+="<p>El campo tos no puede estar vacio</p>";

    }

    var opciones5=document.getElementsByName("garganta");
    for(i in opciones5){

        if(opciones5[i].checked){
            seleccionado=true;
            
        }

        if (opciones5[i].value=="si" && opciones5[i].checked ){

            contar++;
        }

    }
    if(!seleccionado){

        mensajeError+="<p>El campo dolor garganta no puede estar vacio</p>";

    }

    var opciones6=document.getElementsByName("respirar");
    for(i in opciones6){

        if(opciones6[i].checked){
            seleccionado=true;
            
        }
        if (opciones6[i].value=="si" && opciones6[i].checked ){

            contar++;
        }

    }
    if(!seleccionado){

        mensajeError+="<p>El campo respirar no puede estar vacio</p>";

    }


    if(error){
        document.getElementById("mensaje").innerHTML=mensajeError;
        return false;
    }else{
        document.getElementById("mensaje").innerHTML="El formulario fue completado correctamente. " + contar + " síntomas de COVID-19 fueron registrados";
        return false;
    }

    }