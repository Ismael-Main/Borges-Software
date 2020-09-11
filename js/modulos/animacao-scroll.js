export default function initScroll() {
  const alvo = document.querySelectorAll('[data-anime]');
  const animacaoClass = 'animated';

  function animeScroll() {
    const windowTop = window.pageYOffset + (window.innerHeight * 2) / 3;
    alvo.forEach(function (elemento) {
      if (windowTop > elemento.offsetTop) {
        elemento.classList.add(animacaoClass);
      } else {
        elemento.classList.remove(animacaoClass);
      }
    });
  }
  animeScroll();
  window.addEventListener('scroll', function () {
    animeScroll();
  });
}
