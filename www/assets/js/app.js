//hambuger-button
// 要素の取得
const btn = document.querySelector('.js-btn');
const drawer = document.querySelector('.js-drawer');
const header = document.querySelector('.js-header');
const links = document.querySelectorAll('.p-header__nav-item>a[href^="#"]');
// イベントの処理
// ボタン自身にclassを追加
btn.addEventListener('click', function () {
  this.classList.add('is-active-btn');
  this.classList.toggle('is-active-hamburger');
});

// ボタンを押したらheaderにclassを追加する
btn.addEventListener('click', function () {
  header.classList.toggle('is-active-header');
});


// drawerメニュー時にclassを追加、アクセシビリティ
btn.addEventListener('click', function () {
  drawer.classList.toggle('is-active');

  if (this.getAttribute('aria-expanded') == 'false') {

    // aria-expanded を true に変更
    this.setAttribute('aria-expanded', true);
  } else {

    // aria-expanded を false にする
    this.setAttribute('aria-expanded', false);
  }
});

// nav-linkをクリックするとdrawerが閉じてリンクに飛ぶ
for (var i = 0; i < links.length; i++) {
  var l = links[i];
  l.addEventListener('click', function () {
    drawer.classList.remove('is-active');
    header.classList.remove('is-active-header');
  });
};


// animation

// title
window.onload = function () {
  var title = document.querySelector('.p-hero__title');
  title.classList.add('is-inview');
}

// headingにclassを追加する
window.addEventListener('scroll', function () {

  var targets = document.querySelectorAll(".js-text-Animate");

  for (var i = 0; i < targets.length; i++) {
    target = targets[i].getBoundingClientRect();

    var elTop = Math.floor(target.top);
    var h = Math.floor(window.innerHeight * 0.97);

    if (h > elTop) {
      targets[i].classList.add('is-animate');
    }
  }
});

// headingを一文字ずつ分割してspanで包む
var el = document.querySelectorAll('.js-text-Animate');
// エスケープ
function h(str) {
  return String(str).replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, " &#39;")
}

el.forEach(function (e) {
  var str = e.textContent;
  var concatStr = '';
  for (let i = 0; i < str.length; i++) {
    concatStr = concatStr + '<span class="char">' + str[i] + '</span>';
  }
  e.innerHTML = concatStr;
});
