document.addEventListener("DOMContentLoaded", function() { // DOMが完全に読み込まれた後に関数を実行
    const sections = document.querySelectorAll('.fade-in-section'); // .fade-in-section クラスを持つ全てのセクションを選択し、sections変数に格納


  const options = { // IntersectionObserverのオプション設定
    threshold: 0.1 // 10%が表示されたときにコールバックを呼び出す
  };

  const observer = new IntersectionObserver(function(entries, observer) { // IntersectionObserverインスタンスを作成し、コールバック関数を定義
    entries.forEach(entry => { // 交差オブザーバーによって取得された各エントリについて処理を行う
      if (entry.isIntersecting) { // エントリが交差している場合 
        entry.target.classList.add('show'); // エントリのターゲットに'show'クラスを追加
        observer.unobserve(entry.target); // 一度交差したターゲットを監視対象から外す
      }
    });
  }, options);

  sections.forEach(section => { // 全てのセクションについて処理を行う
    observer.observe(section); // 各セクションをIntersectionObserverの監視対象とする
  });
}); // DOMContentLoadedイベントリスナーの閉じ括弧