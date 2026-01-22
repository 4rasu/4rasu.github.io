document.addEventListener('DOMContentLoaded', function () {

  // --- 1. 保存された診断結果（T1, T2...）を取り出す ---
  const myType = localStorage.getItem('shindanResultType');

  // もしデータが無ければ T9 (デフォルト) にする
  const currentType = myType ? myType : 'T9';

  // --- 2. タイプごとの特典データ ---
  const tokutenData = {
    "T1": {

      file: "files/t1_set.zip",
      image:1
    },
    "T2": {
      file: "files/t2_set.zip",
      image:2
    },
    "T3": {
      file: "files/t1_set.zip",
      image:3
    },
    "T4": {
      file: "files/t2_set.zip",
      image:4
    },
    "T5": {
      file: "files/t1_set.zip",
      image:5
    },
    "T6": {
      file: "files/t2_set.zip",
      image:6
    },
    "T7": {
      file: "files/t1_set.zip",
      image:7
    },
    "T8": {
      file: "files/t2_set.zip",
      image:8
    },
    "T9": {
      file: "files/t9_set.zip",
      image:9
    }
  };

  // --- 3. 画面の書き換え ---
  // データを取り出す（無ければT9を使う）
  const data = tokutenData[currentType] || tokutenData["T9"];

  // HTMLの要素を取得
  const imageEl = document.getElementById('tokuten-image');
  const contentEl = document.getElementById('tokuten-content-box');
  const btnEl = document.getElementById('final-download-btn');

  // 中身を書き換える
  //contentEl.innerHTML = data.content; // HTMLタグ(<ul>など)を使いたいのでinnerHTML

  // ダウンロードリンクを設定
  btnEl.href = data.file;
  btnEl.innerText = "この特典をダウンロード";

  if (data.image) {
    imageEl.src = "images/gift/" + data.image + ".png";
    imageEl.style.display = "block"; // 画像を表示状態にする
  } else {
    imageEl.style.display = "none"; // 画像データがない場合は隠す
  }

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