const btnAgregarTarea= document.getElementById("btn");
const descripcionTarea= document.getElementById("descripcion");
const nombreTarea= document.getElementById("nombre");
const tabla= document.getElementById("table");
const tbody= document.getElementById("tbody");



btnAgregarTarea.addEventListener("click", ()=>{
    nombre= nombreTarea.value.trim(); //se toma el valor de los inputs
    descripcion= descripcionTarea.value.trim();

    if (nombre !== "" && descripcion !== ""){
    
    const nuevaFila= document.createElement("tr");
    const celdaNombre= document.createElement("td");
    const celdaDescripcion= document.createElement("td");
    const celdaEliminar= document.createElement("td");
    const celdaCkeck= document.createElement("td");

   
    const checkbox= document.createElement("input");
    checkbox.type= "checkbox";
    checkbox.classList.add("check")
    checkbox.addEventListener("change", ()=>{
        tacharTarea(nuevaFila,checkbox);
    })

    
    const btnEliminar= document.createElement("button");
    btnEliminar.innerHTML= '<i class="bi bi-trash"></i>';
    btnEliminar.classList.add("btn-eliminar")
    btnEliminar.addEventListener("click", ()=>{
        eliminarTarea(nuevaFila)
    })
    
    celdaNombre.textContent= nombre; //se agrega el valor a las nuevas celdas
    celdaDescripcion.textContent= descripcion;
    celdaEliminar.appendChild(btnEliminar);
    celdaCkeck.appendChild(checkbox)

    nuevaFila.appendChild(celdaNombre);  //se agrega las celdas en la nueva fila
    nuevaFila.appendChild(celdaDescripcion);
    nuevaFila.appendChild(celdaEliminar)
    nuevaFila.appendChild(celdaCkeck)

    tbody.appendChild(nuevaFila) //y por consiguiente las nueva fila al cuerpo de la tabla. 
    
    limpiarInputs()

}
 else{
    alert("Porfavor complete los campos para continuar!")
 }
});

function eliminarTarea(fila){
    fila.remove();
}

function limpiarInputs(){
    nombreTarea.value="";
    descripcionTarea.value="";
}

function tacharTarea(celda, checkbox){
    const primeraCelda= celda.getElementsByTagName("td")[0];

    if (checkbox.checked) {
        primeraCelda.style.textDecoration = "line-through";
    } else {
        primeraCelda.style.textDecoration = "none";
    }
}