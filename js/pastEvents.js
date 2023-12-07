import * as modulosFunciones from "../modulos/funciones.js"

let url = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(url)
  .then(response => response.json())
  .then(data => {

    //.****************************************************************************************.
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
        caption.innerHTML = `<h1>PAST EVENTS</h1>`
        bannerprincipal.appendChild(bannerItem);
        bannerItem.appendChild(caption);

        bannerprincipal.appendChild(bannerItem);
      }
    }



    //.****************************************************************************************.
    // carrusel card Past Events
    let carruselprincipal = document.getElementById("carrusel-Principal");

    let eventopasado = modulosFunciones.eventosPasados(data.events, data.currentDate)
    console.log(eventopasado);

    // let pasadoyfuturo = eventospasadosfuturos(data.events,data.currentDate,false);
    // console.log(pasadoyfuturo);

    modulosFunciones.pintartarjetasde4en4(eventopasado, carruselprincipal)
    console.log(eventopasado);

    //.****************************************************************************************.
    // función combinada

    // function eventospasadosfuturos(arreglo,fecha,pasadosfuturos) {
    // let nuevoArreglo = [];
    // for (let i = 0; i < arreglo.length; i++) {
    //   if (pasadosfuturos == true) {
    //     if (arreglo[i].date > fecha) {
    //       nuevoArreglo.push(arreglo[i]);
    //     }
    //   }else{
    //     if (arreglo[i].date < fecha) {
    //       nuevoArreglo.push(arreglo[i]);
    //     }
    //   }

    // }

    // return nuevoArreglo;
    // }

    //.****************************************************************************************.
    // filtrar checkbox seleccionados
    let contenedorcheckbox = document.getElementById("contenedorcheckbox");

    //.****************************************************************************************.
    // nuevo arreglo de sólo categorias
    // let arreglocheckbox = data.events.map(events => events.category);

    // nuevo arreglo checkbox quitando los duplicados y los trae en un nodo
    // arreglocheckbox = new Set(arreglocheckbox);

    // convirtiendo el nodo en un array o arreglo
    // arreglocheckbox = Array.from(arreglocheckbox)

    //código anterior simplificado
    let arreglocheckbox = Array.from(new Set(data.events.map(events => events.category)))

    //.****************************************************************************************.
    // funcion pintar checkbox
    modulosFunciones.pintarcheckbox(arreglocheckbox, contenedorcheckbox)

    contenedorcheckbox.addEventListener("change", e => {
      let checked = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(checkbox => checkbox.value.toLowerCase())
      let palabraTexto = document.getElementById("inputBuscador").value;


      let nuevoarreglo;

      // Verificar si no hay checkboxes seleccionados
      if (checked.length === 0) {
        // Si no hay checkboxes seleccionados, mostrar todas las tarjetas
        nuevoarreglo = eventopasado;
      } else {
        // Filtrar por checkboxes seleccionados
        nuevoarreglo = modulosFunciones.filtrarporcheckbox(eventopasado, checked);
        nuevoarreglo = modulosFunciones.filtrarInputBuscar(nuevoarreglo, palabraTexto)
      }

      modulosFunciones.pintartarjetasde4en4(nuevoarreglo, carruselprincipal);
    })


    //.****************************************************************************************.
    //función filtrar en el buscador o Search

    let buscador = document.getElementById("inputBuscador");

    buscador.addEventListener("keyup", e => {
      console.log(e.target.value);
      let checked = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(checkbox => checkbox.value.toLowerCase());
      let nuevoarreglobuscar = modulosFunciones.filtrarInputBuscar(eventopasado, e.target.value)
      // if (checked.length == 0) {
      //   pintartarjetasde4en4(nuevoarreglobuscar, carruselprincipal);
      // } else {
      //   nuevoarreglobuscar = filtrarporcheckbox(nuevoarreglobuscar,checked)
      // }

      if (checked.length != 0) {
        nuevoarreglobuscar = modulosFunciones.filtrarporcheckbox(nuevoarreglobuscar, checked)
      }
      console.log(nuevoarreglobuscar);
      modulosFunciones.pintartarjetasde4en4(nuevoarreglobuscar, carruselprincipal);
    })

  });