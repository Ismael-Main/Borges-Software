// animaçao maquina de escrever
export default function initAnimeMaquinaEscrever() {
  function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 80 * i);
    });
  }
  const titulo = document.querySelector('h1');
  typeWriter(titulo);
}
