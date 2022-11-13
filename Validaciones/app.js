import { validar } from "./validaciones.js";//importamos la funcion validar del archivo validaciones.js

const inputs = document.querySelectorAll("input"); //vamos a seleccionar todos los inputs de tipo "input" 

inputs.forEach(input => {
    input.addEventListener('blur',(input) => {//a todos los inputs les vamos a agregar el listener cuando nos quitemos de seleccion o de foco (blur)
        validar(input.target) //cuando salga de foco mandara a llamar a esat funcion
    })
})