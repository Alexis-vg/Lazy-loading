import { registImage } from "./lazy";
const createImageNode = () => {
  /* https://randomfox.ca/images/26.jpg */
  const API_BASE = "https://randomfox.ca/images/";
  const numMax = 122;
  const numMin = 1;

  const numRandom = () =>
    Math.round(Math.random() * (numMax - numMin) + numMin);
  // redondeamos el decimal que nos devuelve envolviendo todo en Math.round
  const container = document.createElement("div");

  const image = document.createElement("img");
  image.className = "mx-auto";
  image.width = "320";
  image.dataset.src = `${API_BASE}${numRandom()}.jpg`;

  const imagesWrapper = document.createElement("div");
  imagesWrapper.className = "images-wrapper";
  imagesWrapper.style.margin = "12px auto";
  imagesWrapper.style.width = "320px";
  imagesWrapper.style.borderRadius = "10px";
  imagesWrapper.style.overflow = "hidden";
  imagesWrapper.style.backgroundColor = "gray";

  container.append(image);
  imagesWrapper.append(container);
  return imagesWrapper;
};
const mountNode = document.getElementById("images"); // la montura la creamos en el HTML previeemnte

const addButton = document.querySelector("button.p-3"); //este boton fue creado en el HTML previamente

const addImage = () => {
  const newImage = createImageNode();
  mountNode.append(newImage);
  registImage(newImage); //enviamos la imagen al lazy loading y la empiezes a escuchar
};
addButton.addEventListener("click", addImage);

const cleanButton = document.querySelector("button.p-4");

cleanButton.addEventListener("click", () => {
  mountNode.innerHTML = "";
});

addButton.addEventListener("click", addImage);
