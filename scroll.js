var link = document.querySelectorAll('#menu a')[1];
var menu = document.querySelector('#menu');

link.addEventListener('click', function (event) {
  event.preventDefault();
  var targetElement = document.querySelector('#s2');
  window.scroll({
    top: targetElement.offsetTop - menu.offsetHeight,
    behavior: 'smooth'
  });
});


