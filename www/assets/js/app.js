// title animation
window.onload = function () {
  var title = document.querySelector('.p-hero__title');
  title.classList.add('is-inview');
}

// headingにclassを追加する
window.addEventListener('scroll', function () {

  var targets = document.querySelectorAll(".js-h_Animate");

  for (var i = 0; i < targets.length; i++) {
    target = targets[i].getBoundingClientRect();

    var elTop = Math.floor(target.top);
    var h = Math.floor(window.innerHeight * 0.78);

    if (h > elTop) {
      targets[i].classList.add('is-animate');
    }
  }
});

// headingを一文字ずつ分割してspanで包む
var el = document.querySelectorAll('.js-h_Animate');

el.forEach(function (e) {
  var str = e.textContent;
  var concatStr = '';
  for (let i = 0; i < str.length; i++) {
    concatStr = concatStr + '<span class="char">' + str[i] + '</span>'
  }
  e.textContent = concatStr;
});
