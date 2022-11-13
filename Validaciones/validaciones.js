/*const inputNacimiento = document.querySelector('#birth');
inputNacimiento.addEventListener('blur', (evento) => {
    validarNacimiento(evento.target);
});//blur nos dice que el evento se va a disparar cuando el mouse o el prompt se quite el foco de esa area
*/
export function validar (input){//export nos permite usar la funcion en otros archivos
    const tipoDeInput = input.dataset.tipo;//dataset hace referencia que vamos a toamr todos los datas y el .tipo hacer referecnia al data-tipo hecho en el registro.html
    if(validadores[tipoDeInput]){

    }//vamosa validar que dentro de la cte validadores exista el tipo de input
    
    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = " ";
       
    }else{
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput,input);

    }
}
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
];
const mensaejesDeError = { //asi se define un objeto y aquis e define todos los tipos de error que pueden aparecer
    nombre:{//aqui tambien definimos un objeto
        valueMissing: "El campo nombre, no puede estar vacio"//si no escribimos nada en nombre

    },
    email:{//aqui tambien definimos un objeto
        valueMissing: "El campo mail, no puede estar vacio",//si no escribimos nada en correo
        typeMismatch: "El correo no es valido"// si no aplicamos correctamente el tipo de dato que debe tener un mail
    },
    password:{//aqui tambien definimos un objeto
        valueMissing: "El campo password, no puede estar vacio",//si no escribimos nada en nombre
        patternMismatch:"Al menos 6 caracteres, maximo 12 debe conetenr una letra minuscula, una mayuscula, un numero y no puede contener: !@#$%^&*_=+- "

    },
    nacimiento:{//aqui tambien definimos un objeto
        valueMissing: "El campo fecha de nacimiento, no puede estar vacio",//si no escribimos nada en nombre
        customError:"Debes tener al menos 18 anos de edad"


    },
    numero: {
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"El formato requerido es XXXXXXXXX 10 numeros"
    },
    direccion: {
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"La direccion debe contener entre 10 a 40 caracteres."
    },
    ciudad: {
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"La ciudad debe contener entre 4 a 30 caracteres."
    },
    estado: {
        valueMissing:"Este campo no puede estar vacio",
        patternMismatch:"El estado debe contener entre 4 a 30 caracteres."
    }


}

const validadores = {
    nacimiento: input => validarNacimiento(input)
};

function mostrarMensajeDeError(tipoDeInput,input){
    let mensaje ="";
    tipoDeErrores.forEach(error => {
        if (input.validity[error])
        
        {
            console.log(error);
            console.log(input.validity[error]);
            console.log(mensaejesDeError[tipoDeInput][error]);
            mensaje = mensaejesDeError[tipoDeInput][error];
        }
    })
    return mensaje;
}

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = '';
    if (!mayorDeEdad(fechaCliente)){//si la funcion mayorDeEdad devuelve true (pero !true = false) entonces mensaje toma el valor de "Debes tener al menos 18 anos de edad"
        mensaje = "Debes tener al menos 18 anos de edad"
    }

    input.setCustomValidity(mensaje);//aqui va enviar un mensaje diceindo que debe tener al menos 18 anos

}

function mayorDeEdad (fecha){

    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());//vamos a sumar la fecha actual 18 anos
    //console.log( diferenciaFechas < fechaActual) ;//comparamos la fecha ingresada por el usurario y la fecha a la q seumaamos 28 para ver si se pasa o no para comprobar que el usuario es mayor de edad
    return diferenciaFechas < fechaActual; //retornanra true o false dependeiendo de la comparacion hecha
}