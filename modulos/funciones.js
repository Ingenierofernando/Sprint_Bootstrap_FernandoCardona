//.****************************************************************************************.
// funcion pintar tarjetas
export function pintartarjetasde4en4(arregloevent, divprincipal) {

divprincipal.innerHTML = ""

if (arregloevent.length == 0) {
  divprincipal.innerHTML =
    `          
  <img src="https://cdn.dribbble.com/users/212949/screenshots/856197/media/da184ca3dabff52a03119a3d6922fbb9.png?resize=400x300&vertical=center" class="d-block w-100 tamañocard" alt="...">
  `;
 let caption = document.createElement("div");
  caption.classList.add("carousel-caption", "badge", "text-white", "mt-5")
  caption.innerHTML = `
  
  <h1 >No hay tarjetas que coincidan con esta palabra</h1>
  `
  divprincipal.appendChild(caption);
}

for (let i = 0; i < arregloevent.length; i+=4) {
let carruselItem
if (i < 4) {
   carruselItem = document.createElement("div");
carruselItem.classList.add("carousel-item", "active");

}else{
   carruselItem = document.createElement("div");
carruselItem.classList.add("carousel-item");

}

let contenedor = document.createElement("div");
contenedor.classList.add("div-imagen","d-flex", "flex-wrap", "justify-content-around", "p-5", "container-col-lg", "container-col-md", "container-mx-auto");

for (let j = i; j < i + 4; j++) {

if (arregloevent[j] != undefined){
let card = document.createElement("div");
card.classList.add("card", "tamañocard", "m-1");

card.innerHTML = `          
  <img src="${arregloevent[j].image}" class="card-img-top img-fluid img-fluid img-thumbnail d-block w-100"
      alt="...">
  <div class="card-body">
      <h5 class="card-title text-center">${arregloevent[j].name}</h5>
      <p class="card-text text-center">${arregloevent[j].description}</p>
      <div class="container container-fluid d-flex justify-content-between">
          <p>Price: ${arregloevent[j].price}</p>
          <a href="./details.html?id=${arregloevent[j]._id}" class="btn btn-primary">Details</a>
      </div>
  </div>`

  contenedor.appendChild(card);
}
}
carruselItem.appendChild(contenedor);
divprincipal.appendChild(carruselItem);
}

}

//.****************************************************************************************.
// funcion pintar checkbox seleccionado
export function pintarcheckbox(arreglocheckbox, divcheckbox) {
for (let i = 0; i < arreglocheckbox.length; i++) {
  if (arreglocheckbox[i] != undefined) {
    let checkbox = document.createElement("div")
    checkbox.classList.add("form-check", "form-check-inline")
    checkbox.innerHTML = `<input class="form-check-input" type="checkbox" value="${arreglocheckbox[i]}"  id="${arreglocheckbox[i]}">
<label class="form-check-label" for="${arreglocheckbox[i]}">${arreglocheckbox[i]}</label>`
    divcheckbox.appendChild(checkbox)
  }
  
}
}

//.****************************************************************************************.
// funcion filtrar chechbox seleccionados
export function filtrarporcheckbox(arreglo, arreglocheck) {
let arreglofinal = arreglo.filter(events => arreglocheck.includes(events.category.toLowerCase()));
console.log(arreglofinal);
return arreglofinal
}

//.****************************************************************************************.
// función filtrar Buscador o Search
export function filtrarInputBuscar(arregloBuscar, palabraTexto) {
let filtrarBuscar = arregloBuscar.filter(eventoFiltroBuscar => eventoFiltroBuscar.name.toLowerCase().includes(palabraTexto.toLowerCase()) || eventoFiltroBuscar.description.toLowerCase().includes(palabraTexto.toLowerCase())); 
return filtrarBuscar
}


//.****************************************************************************************.
// función próximos eventos
export function proximosEventos(arreglo,fecha) {
  let nuevoArreglo = [] // Inicializar como un array vacío
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].date > fecha) {
      nuevoArreglo.push(arreglo[i]);
    }
  }
  return nuevoArreglo;
  
}

//.****************************************************************************************.
// función eventos Pasados
export function eventosPasados(arreglo,fecha ) { 
  let nuevoArreglo = []
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].date < fecha) {
      nuevoArreglo.push(arreglo[i]);
    }
  
  }
  return nuevoArreglo  
}