function validar_formulario(){
    var username= document.formregistro.username;
    var email= document.formregistro.correo;
    var password= document.formregistro.password;
    
    var username_len = username.value.length;
    if (username_len == 0 || username_len<8){
        alert("Debes ingresar un username con min. 8 caracteres");
        passid.focus();
        return false;
    }

    var formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!email.value.match(formato_email)){
        alert("Debes ingresar una direccion de correo valido");
        email.focus();
        return false;
    }

    var passid_len = password.value.length;
    if (passid_len == 0 || passid_len<8){
        alert=("Debes ingresar una password con mas de 8 caracteres");
        passid.focus();
    }
}