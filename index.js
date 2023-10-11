function  entradaDisco(){
    let name = prompt("ingrese nombre ");  
    let contraseña = prompt("ingrese contraseña");
    while(contraseña =="" || name == ""){
        alert("contraseña o nombre invalido , ingrese una nueva");
         name = prompt("ingrese su nombre nuevamente");
        contraseña = prompt("ingrese contraseña");
      }
    let lastname = prompt("ingrese apellido");
    let age = Number(prompt("ingrese edad"));
    if(age<18){
        alert("no cumples con la edad requerida por la ley");
        
    }else{
        alert(" Eres mayor de edad , puedes entrar");
    }
    let correo = prompt("ingrese correo");
    
    alert("datos completados");
    }



entradaDisco();


function Comprarentrada(entrada){
 
    switch (entrada) {
        case "vip":
            alert("el valor de la entrada vip es de $55.000");
            return `${entrada}`;
            
            break;

        case "normal":
            alert("el valor de la entrada es 20.000 ")
            return `${entrada}`;
            break;
    
    
        default:
            break;
    }
  

}

let e = prompt("ingrese tipo de entrada")

while (e=="") {
    alert("entrada no valida");
    e = prompt("ingrese tipo de entrada");   
}

Comprarentrada(e);
    


alert(`La entrada comprada fue ${e}`);