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
        caption.innerHTML = `<h1>CONTACT</h1>`
        bannerprincipal.appendChild(bannerItem);
        bannerItem.appendChild(caption);

        bannerprincipal.appendChild(bannerItem);
      }
    }

  });