// ローディング
//

//hambuger-button
// 要素の取得
var btn = document.querySelector('.js-btn');
var drawer = document.querySelector('.js-drawer');
var header = document.querySelector('.js-header');
var links = document.querySelectorAll('.p-header__nav-item>a[href^="#"]');
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

// nav-linkをクリックするとdrawerが閉じてページ内リンクに飛ぶ
for (var i = 0; i < links.length; i++) {
  var l = links[i];
  l.addEventListener('click', function () {
    drawer.classList.remove('is-active');
    header.classList.remove('is-active-header');
  });
};


// text-animation
// title
window.onload = function () {
  var title = document.querySelector('.p-hero__title');
  var loading = document.querySelector('.p-loading');
  title.classList.add('is-inview');
  loading.classList.add('hidden');
}

// scrollして画面に現れたらanimation始まる
window.addEventListener('scroll', function () {
  var targets = document.querySelectorAll(".js-sceoll");
  // 画面に現れたらclassを追加する
  for (var i = 0; i < targets.length; i++) {
    target = targets[i].getBoundingClientRect();

    var elTop = Math.floor(target.top);
    var h = Math.floor(window.innerHeight * 0.8);

    if (h > elTop) {
      targets[i].classList.add('is-animate');
    }
  }
});

// headingを一文字ずつ分割してspanで包む
// var elements = document.querySelectorAll('.js-sprit');

// elements.forEach(function (el) {
//   var str = el.textContent;
//   var concatStr = '';
//   for (let i = 0; i < str.length; i++) {
//     concatStr = concatStr + '<span>' + str[i] + '</span>';
//   }
//   el.innerHTML = concatStr;
//   // el.SetHTML = concatStr;
// });
