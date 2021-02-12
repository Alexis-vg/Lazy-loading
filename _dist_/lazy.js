let totalImages = 0; // iniciamos el contador
let loadedImages = 0;
const isIntersecting = (entry) => {
  return entry.isIntersecting; //true si esta dentro de la pantalla y falso si es lo contrario
};
//ya no quiero que se llame accion sino que se llame loading
const loadImage = (entry) => {
  const container = entry.target; // este target es el contenedor (div)
  const image = container.querySelector("img"); //escogemos la imagen del div
  const url = image.dataset.src; //obtenemos la url de la imagen
  //cargar la imagen
  image.src = url;

  loadedImages += 1;
  logResults();

  // desregistra la imagen para que ya no se observe mas, una vez ha sido observado
  observer.unobserve(container); // eliminar el efecto de lado quehace que se cuenten mas accions  cuendo hacemos scroll hacia arriba
};
// utilizaremos la PAI intersection Observer +
//esto es una instancia cuando creamos el new
const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});
export const registImage = (imagen) => {
  //intersection Observer -> observe(image)
  observer.observe(imagen); // recibimos las imagenes en este cos createImageNode
  totalImages += 1;
  logResults();
};
function logResults() {
  console.log(`⚪️ Total de Imágenes: ${totalImages}`);
  console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
  console.log("--------------------------------------");
}
