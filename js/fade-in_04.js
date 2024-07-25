document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.fade-in-section');
  let lastScrollY = window.scrollY;

  const options = {
      threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
      const currentScrollY = window.scrollY;

      entries.forEach(entry => {
          if (entry.isIntersecting && currentScrollY > lastScrollY) {
              entry.target.classList.add('show');
          } else if (!entry.isIntersecting && currentScrollY <= lastScrollY) {
              entry.target.classList.remove('show');
          }
      });

      lastScrollY = currentScrollY;
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });

  // メニューリンクのクリックイベントハンドラを追加
  const menuLinks = document.querySelectorAll('.overlay a, .menu-pc a');
  menuLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // デフォルトのアンカーリンクの動作を無効にする
          const targetId = this.getAttribute('href').substring(1);
          const targetSection = document.getElementById(targetId);

          window.scrollTo({
              top: targetSection.offsetTop,
              behavior: 'smooth'
          });

          // オーバーレイメニューを閉じる（必要な場合）
          const overlay = document.querySelector('.overlay');
          if (overlay.classList.contains('show')) {
              overlay.classList.remove('show');
              document.querySelector('.menu-sp #open').classList.remove('hide');
          }
      });
  });
});
