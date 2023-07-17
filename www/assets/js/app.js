// title animation
window.onload = function () {
  var title = document.querySelector('.p-hero__title');
  title.classList.add('is-inview');
}

// headingにclassを追加する
window.addEventListener('scroll', function () {

  var targets = document.querySelectorAll(".js-textAnimate");

  for (var i = 0; i < targets.length; i++) {
    target = targets[i].getBoundingClientRect();

    var eleTop = Math.floor(target.top);
    var h = Math.floor(window.innerHeight * 0.78);

    if (h > eleTop) {
      targets[i].classList.add('is-animate');
    }
  }
});
