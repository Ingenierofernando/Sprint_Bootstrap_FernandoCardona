let url = "https://mindhub-xj03.onrender.com/api/amazing"

fetch(url)
  .then(response => response.json())
  .then(data => {


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
        caption.innerHTML = `<h1>DETAILS</h1>`
        bannerprincipal.appendChild(bannerItem);
        bannerItem.appendChild(caption);
        bannerprincipal.appendChild(bannerItem);
      }
    }


    //.******************************************.
    // URLSearchParams para enviar url a otras páginas

    let url = window.location
    let urlString = window.location.href

    console.log(url);
    console.log(urlString);

    let urlArmada = new URL(urlString)
    console.log(urlArmada);

    let parametros = new URLSearchParams(urlArmada.search)
    console.log(parametros);

    console.log(parametros.has('id'));
    let id = parametros.get("id")
    console.log(id);

    let datoseventos = data.events.filter((eventos) => eventos._id == id)
    console.log(datoseventos);

    console.log(data);



    document.getElementById("imagen").src = datoseventos[0].image
    document.getElementById("tituloDetails").innerHTML = datoseventos[0].name
    document.getElementById("descripcionDetails").innerHTML = datoseventos[0].description
    document.getElementById("precioDetails").innerHTML = "Precio:" + " " + datoseventos[0].price
    //.*********************************************.

    // cards carrusel código quemado

    // let carruselprincipal = document.getElementById("carrusel-Principal");

    // for (let i = 0; i < data.events.length; i++) {
    //   let carruselItem = document.createElement("div");

    //   if (i === 0) {
    //     carruselItem.classList.add("carousel-item", "active", "div-imagen");
    //   } else {
    //     carruselItem.classList.add("carousel-item", "div-imagen");
    //   }

    //   if (data.events[i] !== undefined) {
    //     carruselItem.innerHTML = `
    //       <img src="${data.events[i].image}" class="d-block w-100" alt="...">`


    //     carruselprincipal.appendChild(carruselItem);
    //   }
    // }

    // // Títulos y parrafos en card carrusel details

    // let parrafoprincipal = document.getElementById("parrafo-principal");

    // // Crea el título fuera del bucle
    // let tituloh5 = document.createElement("h5");
    // tituloh5.classList.add("card-title");
    // tituloh5.innerHTML = "EVENTS";
    // console.log(tituloh5);

    // // Añade el título a parrafoprincipal fuera del bucle
    // parrafoprincipal.appendChild(tituloh5);

    // // Crea los contenedores para las dos columnas
    // let columna1 = document.createElement("div");
    // columna1.classList.add("container","col-md-6");
    // console.log(columna1);
    // let columna2 = document.createElement("div");
    // columna2.classList.add("container","col-md-6");

    // console.log(columna2);

    // // Añade las columnas a parrafoprincipal
    // parrafoprincipal.appendChild(columna1);
    // parrafoprincipal.appendChild(columna2);

    // for (let i = 0; i < data.events.length; i++) {
    //   let parrafodetail = document.createElement("p");
    //   parrafodetail.classList.add("card-text");
    //   parrafodetail.innerHTML = `${data.events[i].name}`;
    //   console.log(parrafodetail);

    //   // Decide en qué columna agregar el párrafo
    //   if (i < 7) {
    //     columna1.appendChild(parrafodetail);
    //   } else {
    //     columna2.appendChild(parrafodetail);
    //   }
    // }

  });