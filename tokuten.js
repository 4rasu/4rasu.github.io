document.addEventListener('DOMContentLoaded', function () {

  // --- 1. 保存された診断結果（T1, T2...）を取り出す ---
  const myType = localStorage.getItem('shindanResultType');

  // もしデータが無ければ T9 (デフォルト) にする
  const currentType = myType ? myType : 'T9';

  // --- 2. タイプごとの特典データ ---
  const tokutenData = {
    "T1": {
      title: "【戦略家】専用：ロケットスタートセット",
      text: "一言説明",
      content: "<ul><li>特別動画：面接攻略法</li><li>シート：自己PR作成</li></ul>",
      file: "files/t1_set.zip"
    },
    "T2": {
      title: "【T2 冒険家】専用：行動力爆上げセット",
      text: "まずは数を打ちたいあなたへ。「企業リスト管理表」をプレゼント！",
      content: "<ul><li>Excel：企業管理表</li><li>PDF：業界地図の見方</li></ul>",
      file: "files/t2_set.zip"
    },
    "T3": {
      title: "T3",
      text: "一言説明",
      content: "<ul><li>特別動画：面接攻略法</li><li>シート：自己PR作成</li></ul>",
      file: "files/t1_set.zip"
    },
    "T4": {
      title: "T4",
      text: "まずは数を打ちたいあなたへ。「企業リスト管理表」をプレゼント！",
      content: "<ul><li>Excel：企業管理表</li><li>PDF：業界地図の見方</li></ul>",
      file: "files/t2_set.zip"
    },
    "T5": {
      title: "T5",
      text: "一言説明",
      content: "<ul><li>特別動画：面接攻略法</li><li>シート：自己PR作成</li></ul>",
      file: "files/t1_set.zip"
    },
    "T6": {
      title: "T6",
      text: "まずは数を打ちたいあなたへ。「企業リスト管理表」をプレゼント！",
      content: "<ul><li>Excel：企業管理表</li><li>PDF：業界地図の見方</li></ul>",
      file: "files/t2_set.zip"
    },
    "T7": {
      title: "T7",
      text: "一言説明",
      content: "<ul><li>特別動画：面接攻略法</li><li>シート：自己PR作成</li></ul>",
      file: "files/t1_set.zip"
    },
    "T8": {
      title: "T8",
      text: "まずは数を打ちたいあなたへ。「企業リスト管理表」をプレゼント！",
      content: "<ul><li>Excel：企業管理表</li><li>PDF：業界地図の見方</li></ul>",
      file: "files/t2_set.zip"
    },
    "T9": {
      title: "T9",
      text: "不安なあなたには、まず自己分析の基本がわかるガイドブックを。",
      content: "<ul><li>PDF：やさしい自己分析</li><li>動画：先輩インタビュー</li></ul>",
      file: "files/t9_set.zip"
    }
  };

  // --- 3. 画面の書き換え ---

  // データを取り出す（無ければT9を使う）
  const data = tokutenData[currentType] || tokutenData["T9"];

  // HTMLの要素を取得
  const titleEl = document.getElementById('tokuten-title');
  const textEl = document.getElementById('tokuten-text');
  const contentEl = document.getElementById('tokuten-content-box');
  const btnEl = document.getElementById('final-download-btn');

  // 中身を書き換える
  titleEl.innerText = data.title;
  textEl.innerText = data.text;
  contentEl.innerHTML = data.content; // HTMLタグ(<ul>など)を使いたいのでinnerHTML

  // ダウンロードリンクを設定
  btnEl.href = data.file;
  btnEl.innerText = "この特典をダウンロード";

  // tokuten.js の一番下（ }); の手前 ）に貼り付け

  // ▼▼▼ ★追加：ダウンロード完了計測 ▼▼▼
  if (btnEl) {
    btnEl.addEventListener('click', function () {
      // 現在のタイプを取得
      const currentType = localStorage.getItem('shindanResultType');

      gtag('event', 'file_download', {
        'file_name': data.file,
        'user_type': currentType
      });
    });
  }

});