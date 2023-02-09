const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const operadores = document.querySelectorAll('.operador'); 
const botonBorrar = document.querySelector('.borrar');
const botonBorrarTodo = document.querySelector('.borrar-todo')

const display = new Display(displayValorAnterior,displayValorActual);


botonesNumeros.forEach(boton =>{
    boton.addEventListener('click',() => display.agregarNumero(boton.innerHTML))
})

botonBorrar.addEventListener('click',() => display.borrar());

botonBorrarTodo.addEventListener('click',()=> display.borrarTodo());

operadores.forEach(boton => {
    boton.addEventListener('click',() => display.computar(boton.value))
})