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
  // pc幅になったらdrawerが消える
  window.addEventListener('resize', function () {
    const windowWidth = document.documentElement.clientWidth;
    const lg = 992;
    if (windowWidth > lg) {
      drawer.classList.remove('is-active');
      header.classList.remove('is-active-header');
    }
  });
};
drawer();


// Intersection Observer
const createObserver = function () {
  const targets = document.querySelectorAll('.js-scroll');
  let options = {
    rootMargin: '0px 0px -20% 0px',
    threshold: 0
  };
  let observer = new IntersectionObserver(scrollEvent, options);

  targets.forEach(function (target) {
    observer.observe(target);
  });

  function scrollEvent(entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-scroll');
      };
    });
  };
}
// title-IntersectionObserver
const scrollEvent = function () {
  createObserver();
};
scrollEvent();

// photo-IntersectionObserver
const photoColor = function () {
  if (window.matchMedia("(max-width: 992px)").matches) {
    createObserver();
  }
};
photoColor();
