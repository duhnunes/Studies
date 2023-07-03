// JSON
const movie = {
    title: "Viuva Negra",
    url: "https://caminho.com/img",
};

// HTML
const figure = document.createElement("figure");
const img = document.createElement('img');
const title = document.createElement('figcaption');
const listBanner = document.querySelector(".movie");

figure.classList.add("card");

img.src = "./src/img/movie/viuvanegra.png";
img.alt = "Viuva Negra Banner";
img.classList.add("cardMovie");

title.textContent = "Viuva Negra";
title.classList.add('captionMovie');

figure.insertAdjacentElement("beforeend", img);


figure.insertAdjacentElement("beforeend", title);

listBanner.insertAdjacentElement("beforeend", figure);