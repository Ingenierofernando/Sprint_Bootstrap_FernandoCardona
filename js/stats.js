import * as modulosFunciones from "../modulos/funciones.js"

let url = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(url)
  .then(response => response.json())
  .then(data => {
console.log(data.events);

    //carrusel banner
    let bannerprincipal = document.getElementById("banner-principal");

    for (let i = 0; i < data.events.length; i++) {
      let bannerItem = document.createElement("div");

      if (i === 0) {
        bannerItem.classList.add("carousel-item", "active");
      } else {
        bannerItem.classList.add("carousel-item");
      }

      if (data.events[i] !== undefined) {
        bannerItem.innerHTML = `
      <img src="${data.events[i].image}" class="d-block w-100" alt="...">
    `;
        let caption = document.createElement("div");
        caption.classList.add("carousel-caption")
        caption.innerHTML = `<h1>STATS</h1>`
        bannerprincipal.appendChild(bannerItem);
        bannerItem.appendChild(caption);

        bannerprincipal.appendChild(bannerItem);
      }
    }




// Calcula el porcentaje de asistencia para cada evento
let eventosConPorcentaje = data.events.map(evento => {
  if (evento.capacity !== 0) {
    let porcentajeAsistencia = ((evento.assistance / evento.capacity) * 100).toFixed(2);
    return { evento, porcentajeAsistencia };
  } else {
    // Manejar el caso en el que la capacidad es 0 para evitar la división por cero
    return { evento, porcentajeAsistencia: '0.00' };
  }
});
//.***********************************************************************************************.
// Encuentra el evento con el mayor porcentaje de asistencia
let eventoMayorPorcentajeAsistencia = eventosConPorcentaje.reduce((maxEvento, evento) => {
  return Number(evento.porcentajeAsistencia) > Number(maxEvento.porcentajeAsistencia) ? evento : maxEvento;
}, eventosConPorcentaje[0]);
    
    let eventoMenorPorcentajeAsistencia = eventosConPorcentaje.reduce((maxEvento, evento) => {
  return Number(evento.porcentajeAsistencia) < Number(maxEvento.porcentajeAsistencia) ? evento : maxEvento;
}, eventosConPorcentaje[0]);

    console.log(eventosConPorcentaje);


    // Supongamos que 'data.events' es un array de eventos con la propiedad 'capacity' y 'name'.

// Encuentra el evento con la mayor capacidad
let eventoMayorCapacidad = data.events.reduce((maxEvento, evento) => {
  return evento.capacity > maxEvento.capacity ? evento : maxEvento;
}, data.events[0]);

// Verifica si el eventoMayorCapacidad tiene la propiedad 'name' antes de acceder a ella
if (eventoMayorCapacidad && eventoMayorCapacidad.name) {
  eventoMayorCapacidad.name;
  eventoMayorCapacidad.capacity;
} else {
  "No se encontró un evento válido con capacidad";
}

console.log("Evento con menor porcentaje de asistencia:", eventoMenorPorcentajeAsistencia.evento.name, "con",eventoMenorPorcentajeAsistencia.porcentajeAsistencia,"%");
    console.log("Porcentaje de asistencia:", eventoMayorPorcentajeAsistencia.porcentajeAsistencia, "%");
    
    //.***********************************************************************************************.
    
    let tablaEventoMayorPorcentajeAsistencia = document.getElementById("tablaEventosUno")

    tablaEventoMayorPorcentajeAsistencia.innerHTML = `<td>Evento con mayor porcentaje de asistencia: ${eventoMayorPorcentajeAsistencia.evento.name} con ${eventoMayorPorcentajeAsistencia.porcentajeAsistencia}%</td>
            <td>Evento con menor porcentaje de asistencia: ${eventoMenorPorcentajeAsistencia.evento.name} con ${eventoMenorPorcentajeAsistencia.porcentajeAsistencia}%</td>
            <td>Evento con mayor capacidad: ${eventoMayorCapacidad.name} Con una capacidad máxima de: ${eventoMayorCapacidad.capacity}</td>`

    //.*************************************************************************************************.
    let eventoProximo = modulosFunciones.proximosEventos(data.events, data.currentDate);
    console.log(eventoProximo);

    // código individual
    // let eventoProximoCategoria = eventoProximo.map(eproximo => eproximo.category);
    // console.log(eventoProximoCategoria);
    
    // eventoProximoCategoria = new Set(eventoProximoCategoria);
    // console.log(eventoProximoCategoria);

    // eventoProximoCategoria = Array.from(eventoProximoCategoria);
    // console.log(eventoProximoCategoria);

    //código simplificado
    let eventoProximoCategoria = Array.from(new Set(eventoProximo.map(eproximo => eproximo.category)));
    console.log(eventoProximoCategoria);

    let eventoProximoestimado = Array.from(new Set(eventoProximo.map(ePEstimado => ePEstimado.estimate))); 
    console.log(eventoProximoestimado);

    let eventoProximoprecio = Array.from(new Set(eventoProximo.map(ePPrecio => ePPrecio.price))); 
    console.log(eventoProximoprecio);

    let eventoProximoIngresos = eventoProximoestimado * eventoProximoprecio;
    console.log(eventoProximoIngresos);

  });