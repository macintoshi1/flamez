document.addEventListener("DOMContentLoaded", function() { // DOMが完全に読み込まれた後に関数を実行
    const sections = document.querySelectorAll('.fade-in-section'); // .fade-in-section クラスを持つ全てのセクションを選択し、sections変数に格納
    let lastScrollY = window.scrollY;


  const options = { // IntersectionObserverのオプション設定
    threshold: 0.1 // 10%が表示されたときにコールバックを呼び出す
  };

  const observer = new IntersectionObserver(function(entries) { // IntersectionObserverインスタンスを作成し、コールバック関数を定義
      const currentScrollY = window.scrollY; // 現在のスクロール位置を取得
      //const scrollingDown = currentScrollY > lastScrollY // 下にスクロールしているかを判定

      entries.forEach(entry => { // 交差オブザーバーによって取得された各エントリについて処理を行う
        if (entry.isIntersecting && currentScrollY > lastScrollY) {
          entry.target.classList.add('show'); // ターゲットに'show'クラスを追加
        } else if (!entry.isIntersecting && currentScrollY <= lastScrollY) { // エントリが交差していない場合かつ上にスクロールしている場合
          entry.target.classList.remove('show'); // ターゲットから'show'クラスを削除
        }
      });

      lastScrollY = currentScrollY // 最後のスクロール位置を更新
    }, options);

    sections.forEach(section => { // 全てのセクションについて処理を行う
      observer.observe(section); // 各セクションをIntersectionObserverの監視対象とする
  });
}); // DOMContentLoadedイベントリスナーの閉じ括弧