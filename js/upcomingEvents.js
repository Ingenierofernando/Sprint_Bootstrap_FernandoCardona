const data = {
  currentDate: "2023-01-01",
  events: [
    {
      _id: "639c723b992482e5f2834be9",
      name: "Collectivities Party",
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      date: "2022-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
      __v: 0,
    },
    {
      _id: "639c723b992482e5f2834beb",
      name: "Korean style",
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      date: "2023-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      price: 10,
      __v: 0,
      estimate: 42756,
    },
    {
      _id: "639c723c992482e5f2834bed",
      name: "Jurassic Park",
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      date: "2022-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      price: 15,
      __v: 0,
      assistance: 65892,
    },
    {
      _id: "639c723c992482e5f2834bef",
      name: "Parisian Museum",
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      date: "2023-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf1",
      name: "Comicon",
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      date: "2022-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf3",
      name: "Halloween Night",
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      date: "2023-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf5",
      name: "Metallica in concert",
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      date: "2023-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf7",
      name: "Electronic Fest",
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      date: "2022-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bf9",
      name: "10K for life",
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      date: "2022-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bfb",
      name: "15K NY",
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      date: "2023-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      price: 3,
      __v: 0,
      estimate: 2569800,
    },
    {
      _id: "639c723d992482e5f2834bfd",
      name: "School's book fair",
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      date: "2023-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bff",
      name: "Just for your kitchen",
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      date: "2022-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c01",
      name: "Batman",
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      date: "2022-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c03",
      name: "Avengers",
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      date: "2023-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
      __v: 0,
    },
  ],
};
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
    caption.innerHTML = `<h1>UPCOMING EVENTS</h1>`
    bannerprincipal.appendChild(bannerItem);
    bannerItem.appendChild(caption);

    bannerprincipal.appendChild(bannerItem);
  }
}




//.****************************************************************************************.
// carrusel card Upcoming Events
let carruselprincipal = document.getElementById("carrusel-Principal");

let eventoProximo = proximosEventos(data.events,data.currentDate)
console.log(eventoProximo);

// let pasadoyfuturo = eventospasadosfuturos(data.events,data.currentDate,true);
// console.log(pasadoyfuturo);

pintartarjetasde4en4(eventoProximo, carruselprincipal)
console.log(eventoProximo);


//.****************************************************************************************.
// función combinada

// function eventospasadosfuturos(arreglo,fecha,pasadosfuturos) {
//   let nuevoArreglo = [];
//   for (let i = 0; i < arreglo.length; i++) {
//     if (pasadosfuturos == true) {
//       if (arreglo[i].date > fecha) {
//         nuevoArreglo.push(arreglo[i]);
//       }
//     }else{
//       if (arreglo[i].date < fecha) {
//         nuevoArreglo.push(arreglo[i]);
//       }
//     }
    
//   }
//   return nuevoArreglo;
// }


//.****************************************************************************************.
// filtrar checkbox seleccionados
let contenedorcheckbox = document.getElementById("contenedorcheckbox");


// nuevo arreglo de sólo categorias
// let arreglocheckbox = data.events.map(events => events.category);

// nuevo arreglo checkbox quitando los duplicados y los trae en un nodo
// arreglocheckbox = new Set(arreglocheckbox);

// convirtiendo el nodo en un array o arreglo
// arreglocheckbox = Array.from(arreglocheckbox)

//código anterior simplificado
let arreglocheckbox = Array.from(new Set(data.events.map(events => events.category)))


// funcion pintar checkbox
pintarcheckbox(arreglocheckbox,contenedorcheckbox)

contenedorcheckbox.addEventListener("change", e => {
let checked = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(checkbox => checkbox.value.toLowerCase())
let palabraTexto = document.getElementById("inputBuscador").value;


let nuevoarreglo;

// Verificar si no hay checkboxes seleccionados
if (checked.length === 0) {
  // Si no hay checkboxes seleccionados, mostrar todas las tarjetas
  nuevoarreglo = eventoProximo;
} else {
  // Filtrar por checkboxes seleccionados
  nuevoarreglo = filtrarporcheckbox(eventoProximo, checked);
  nuevoarreglo = filtrarInputBuscar(nuevoarreglo,palabraTexto)
}

pintartarjetasde4en4(nuevoarreglo, carruselprincipal);
})


//.****************************************************************************************.

function proximosEventos(arreglo,fecha) {
  let nuevoArreglo = [] // Inicializar como un array vacío
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].date > fecha) {
      nuevoArreglo.push(arreglo[i]);
    }
  }
  return nuevoArreglo;
  
}

//.****************************************************************************************.

// funcion eventos
function pintartarjetasde4en4(arregloevent, divprincipal) {

  divprincipal.innerHTML = "";

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

  for (let i = 0; i < arregloevent.length; i += 4) {
    let carruselItem
    if (i < 4) {
      carruselItem = document.createElement("div");
      carruselItem.classList.add("carousel-item", "active");

    } else {
      carruselItem = document.createElement("div");
      carruselItem.classList.add("carousel-item");

    }

    let contenedor = document.createElement("div");
    contenedor.classList.add("div-imagen","d-flex", "flex-wrap", "justify-content-around", "p-5", "container-col-lg", "container-col-md", "container-mx-auto");

    for (let j = i; j < i + 4; j++) {

      if (arregloevent[j] != undefined) {
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
function pintarcheckbox(arreglocheckbox, divcheckbox) {
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


// funcion filtrar chechbox seleccionados
function filtrarporcheckbox(arreglo, arreglocheck) {
let arreglofinal = arreglo.filter(events => arreglocheck.includes(events.category.toLowerCase()));
console.log(arreglofinal);
return arreglofinal
}

//.****************************************************************************************.
//función filtrar en el buscador o Search

let buscador = document.getElementById("inputBuscador");

buscador.addEventListener("keyup", e => {
console.log(e.target.value);
let checked = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(checkbox => checkbox.value.toLowerCase());
let nuevoarreglobuscar = filtrarInputBuscar(eventoProximo, e.target.value)
console.log(nuevoarreglobuscar);
// if (checked.length == 0) {
//   pintartarjetasde4en4(nuevoarreglobuscar, carruselprincipal);
// } else {
//   nuevoarreglobuscar = filtrarporcheckbox(nuevoarreglobuscar,checked)
// }

if (checked.length != 0) {
nuevoarreglobuscar = filtrarporcheckbox(nuevoarreglobuscar,checked)
}
console.log(nuevoarreglobuscar);
pintartarjetasde4en4(nuevoarreglobuscar, carruselprincipal);
})

// función filtrar
function filtrarInputBuscar(arregloBuscar, palabraTexto) {
let filtrarBuscar = arregloBuscar.filter(eventoFiltroBuscar => eventoFiltroBuscar.name.toLowerCase().includes(palabraTexto.toLowerCase()) || eventoFiltroBuscar.description.toLowerCase().includes(palabraTexto.toLowerCase())); 
return filtrarBuscar
}