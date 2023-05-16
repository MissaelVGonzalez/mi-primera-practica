const botonAgregar = document.getElementById("boton");
const enviar = document.getElementById("enviar");
const lista = document.getElementById("lista");
const eliminar = document.getElementsByClassName("eliminar");

botonAgregar.addEventListener("click", function(event){
  event.preventDefault();

  const texto = enviar.value.trim();

  if (texto !== "") {
    const elementoLista = document.createElement("li");
    lista.appendChild(elementoLista);
    enviar.value = "";

    elementoLista.classList.add("mi-clase");

    const check = document.createElement("input");
    check.type = "checkbox";
    const label = document.createElement("label");
    label.textContent = texto;

    const span = document.createElement("span");
    span.className = "checkbox-span";
    label.appendChild(span);

    elementoLista.appendChild(check);
    elementoLista.appendChild(label);

    lista.appendChild(elementoLista);
    inputText.value = "";

    check.addEventListener("click", function() {
      label.classList.toggle("completado");
    });

    elementoLista.appendChild(botonEliminar);
    lista.appendChild(elementoLista);
    enviar.value = "";

    eliminar.addEventListener("click", function(event2){
      event2.preventDefault();
      lista= "";
    });
  }
});
