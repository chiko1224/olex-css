// JS使用中
document.documentElement.classList.add('is-useJs');

// load
const load = function () {
  window.addEventListener('load', function () {
    // loading
    document.documentElement.classList.add('is-loaded');

    // title-animation
    const title = document.querySelector('.p-hero__title');
    title.classList.add('is-inview');
  });
};
load();

// drawer
const drawer = function () {
  // 要素の取得
  const btn = document.querySelector('.js-hamburger');
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

  // nav-linkをクリックするとdrawerが閉じてページ内リンクに飛ぶ
  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.addEventListener('click', function () {
      drawer.classList.remove('is-active');
      header.classList.remove('is-active-header');
    });
  };
};
drawer();

// scrollして画面に現れたらanimation始まる
const scroll = function () {
  window.addEventListener('scroll', function () {
    let targets = document.querySelectorAll(".js-sceoll");
    // 画面に現れたらclassを追加する
    for (let i = 0; i < targets.length; i++) {
      target = targets[i].getBoundingClientRect();

      let eleTop = Math.floor(target.top);
      let h = Math.floor(window.innerHeight * 0.8);

      if (h > eleTop) {
        targets[i].classList.add('is-animate');
      }
    }
  });
};
scroll();
