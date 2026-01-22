document.addEventListener('DOMContentLoaded', function () {
  // 1. 診断結果データベース (9タイプ)
  const resultsData = {
    "T1": {
      name: "【タイプ1】(仮) 戦略家タイプ",
      description: "あなたはタイプ1です。進捗も気合いも十分！この調子で！",
      events: ["(T1向け) イベントA", "(T1向け) イベントB"],
      downloads: "files/t1_set.zip",
      image: "A1",
      features: [
        "目標に向かって論理的に計画を立てられる",
        "無駄を省き、効率的に行動することができる",
        "リーダーシップを発揮する場面が多い"
      ],
    },
    "T2": {
      name: "【タイプ2】(仮) 冒険家タイプ",
      description: "あなたはタイプ2です。気合いは十分！あとは行動あるのみ！",
      events: ["(T2向け) イベントC", "(T2向け) イベントD"],
      downloads: "files/t2_set.zip",
      image: "A2",
      features: [
        "とにかく行動力がずば抜けている",
        "失敗を恐れず挑戦できる",
        "周りを巻き込むエネルギーがある"
      ],
    },
    "T3": {
      name: "【タイプ3】(仮) 情熱家タイプ",
      description: "あなたはタイプ3です。やる気はピカイチ！まず一歩を踏み出そう！",
      events: ["(T3向け) イベントE", "(T3向け) イベントF"],
      downloads: "files/t3_set.zip",
      image: "A3",
      features: [
        "熱い想いを持っている",
        "一度決めると一直線に進む",
        "感情表現が豊か"
      ],
    },
    "T4": {
      name: "【タイプ4】(仮) 職人タイプ",
      description: "あなたはタイプ4です。コツコツ進めていて偉い！自信を持って！",
      events: ["(T4向け) イベントG", "(T4向け) イベントH"],
      downloads: "files/t4_set.zip",
      image: "A4",
      features: [
        "こだわりを持って作業できる",
        "高い集中力を発揮する",
        "クオリティを妥協しない"
      ],
    },
    "T5": {
      name: "【タイプ5】(仮) マイペースタイプ",
      description: "あなたはタイプ5です。自分のペースでOK！少しずつ進めよう。",
      events: ["(T5向け) イベントI", "(T5向け) イベントJ"],
      downloads: "files/t5_set.zip",
      image: "A5",
      features: [
        "周囲に流されず自分を持てる",
        "冷静に状況を判断できる",
        "独自の視点を持っている"
      ],
    },
    "T6": {
      name: "【タイプ6】(仮) 探求者タイプ",
      description: "あなたはタイプ6です。興味の種を見つけよう。",
      events: ["(T6向け) イベントK", "(T6向け) イベントL"],
      downloads: "files/t6_set.zip",
      image: "A6",
      features: [
        "「なぜ？」を突き詰められる",
        "情報収集能力が高い",
        "分析することが得意"
      ],
    },
    "T7": {
      name: "【タイプ7】(仮) 賢者タイプ",
      description: "あなたはタイプ7です。もう一息！",
      events: ["(T7向け) イベントM", "(T7向け) イベントN"],
      downloads: "files/t7_set.zip",
      image: "A7",
      features: [
        "知識豊富で頼りにされる",
        "客観的なアドバイスができる",
        "物事の本質を見抜ける"
      ],
    },
    "T8": {
      name: "【タイプ8】(仮) 悩める人タイプ",
      description: "あなたはタイプ8です。休憩も大事。",
      events: ["(T8向け) イベントO", "(T8向け) イベントP"],
      downloads: "files/t8_set.zip",
      image: "A8",
      features: [
        "慎重に物事を考えられる",
        "リスク管理能力がある",
        "他人の気持ちに寄り添える"
      ],
    },
    "T9": {
      name: "【タイプ9】(仮) 相談者タイプ",
      description: "あなたはタイプ9です。悩む前にまず相談！私たちがいます！",
      events: ["(T9向け) イベントQ", "(T9向け) イベントR"],
      downloads: "files/t9_set.zip",
      image: "A9",
      features: [
        "素直に人の意見を聞ける",
        "協調性が高くチーム向き",
        "愛されキャラ"
      ],
    }
  };

  // 2. 結果の取得と表示
  // localStorageから結果を取得 (無ければT9)
  const storedType = localStorage.getItem('shindanResultType');
  const resultType = storedType ? storedType : 'T9';

  // 変数名を統一
  const myType = resultType;

  // データを取得
  let resultData = resultsData[resultType];
  if (!resultData) {
    resultData = resultsData["T9"]; // 万が一の安全策
  }

  // HTML要素を取得
  const resultNameElement = document.getElementById('result-name');
  const resultDescElement = document.getElementById('result-description');
  const resultImageElement = document.getElementById('result-image');
  const eventGachaElement = document.getElementById('event-gacha');
  const downloadLinkElement = document.getElementById('download-link');
  const featuresListElement = document.getElementById('features-list'); 

  if (resultNameElement) resultNameElement.innerText = resultData.name;
  if (resultDescElement) resultDescElement.innerText = resultData.description;

  // 特徴リストを動的に生成する処理
  if (featuresListElement) {
    featuresListElement.innerHTML = ''; // まず中身をリセット
    if (resultData.features && Array.isArray(resultData.features)) {
      resultData.features.forEach(function(text) {
        const li = document.createElement('li');
        li.innerText = text;
        featuresListElement.appendChild(li);
      });
    }
  }

  // メイン画像の表示
  if (resultImageElement) {
    const imagePath = `images/result/${resultType}.png`;
    resultImageElement.src = imagePath;
    resultImageElement.style.display = 'block';
  }

  // ガチャ機能
  if (eventGachaElement && resultData.events) {
    const randomIndex = Math.floor(Math.random() * resultData.events.length);
    eventGachaElement.innerText = resultData.events[randomIndex];
  }

  // 特典リンク設定
  if (downloadLinkElement) {
    if (resultData.downloads) {
      downloadLinkElement.href = "tokuten.html";
      downloadLinkElement.innerText = "答えてくれたあなたに専用特典！！";
    } else {
      downloadLinkElement.style.display = 'none';
    }
  }

  // 3. SNSシェアボタンの設定
  try {
    const diagnosisUrl = window.location.href.replace('result.html', 'index.html');
    const shareText = `私の就活タイプは ${resultData.name} でした！\nあなたも診断してみよう！\n\n#就活タイプ診断 #〇〇大学キャリサポ`;

    const shareXBtn = document.getElementById('share-x-btn');
    if (shareXBtn) {
      shareXBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(diagnosisUrl)}`;
      shareXBtn.target = "_blank";
    }

    const shareLineBtn = document.getElementById('share-line-btn');
    if (shareLineBtn) {
      shareLineBtn.href = `https://line.me/R/msg/text/?${encodeURIComponent(shareText + " " + diagnosisUrl)}`;
      shareLineBtn.target = "_blank";
    }
  } catch (e) {
    console.error("シェアボタン設定エラー:", e);
  }

  // 4. マップのハイライト
  try {
    const allMapCells = document.querySelectorAll('.map-cell');
    allMapCells.forEach(cell => cell.classList.add('faded'));

    const currentMapCell = document.getElementById(`map-${resultType}`);

    if (currentMapCell) {
      currentMapCell.classList.remove('faded');
      currentMapCell.classList.add('active-cell');

      currentMapCell.innerHTML = '';

      const mapImg = document.createElement('img');
      mapImg.src = 'images/box/' + resultData.image + '.png';
      mapImg.alt = resultType;
      mapImg.classList.add('result-map-image');
      currentMapCell.appendChild(mapImg);

      const youBadge = document.createElement('div');
      youBadge.className = 'you-badge';
      youBadge.innerText = 'YOU!';
      currentMapCell.appendChild(youBadge);
    }
  } catch (e) {
    console.error("マップハイライトエラー:", e);
  }

  // 5. ロードマップの現在地設定
  const progressLevels = {
    "T1": 5, "T2": 4.5, "T3": 4, "T4": 3.5, "T5": 3,
    "T6": 2.5, "T7": 2.5, "T8": 2, "T9": 1.5
  };

  const myLevel = progressLevels[resultType] || 1;
  const steps = document.querySelectorAll('.roadmap-step');
  const lineFill = document.getElementById('roadmap-line-fill');

  if (steps.length > 0 && lineFill) {
    const currentStepIndex = Math.ceil(myLevel) - 1;
    steps.forEach((step, index) => {
      if (index < currentStepIndex) {
        step.classList.add('active');
      } else if (index === currentStepIndex) {
        step.classList.add('current');
      }
    });

    const maxLevel = 5;
    const percent = ((myLevel - 1) / (maxLevel - 1)) * 100;
    lineFill.style.width = `${percent}%`;
  }

  // 6. 画像保存機能
  const saveBtn = document.querySelector('.share-insta');
  const captureArea = document.getElementById('capture-area');

  if (saveBtn && captureArea) {
    saveBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const originalText = saveBtn.innerText;
      saveBtn.innerText = "作成中...";

      if (typeof html2canvas !== 'undefined') {
        html2canvas(captureArea, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#ffffff"
        }).then(canvas => {
          const imgData = canvas.toDataURL("image/png");
          const link = document.createElement('a');
          link.href = imgData;
          link.download = 'shindan_result.png';
          link.click();
          saveBtn.innerText = originalText;
        }).catch(err => {
          console.error("画像保存エラー:", err);
          alert("画像の保存に失敗しました。");
          saveBtn.innerText = originalText;
        });
      } else {
        alert("画像保存ライブラリが読み込まれていません。");
        saveBtn.innerText = originalText;
      }
    });
  }
  
  // GA計測
  gtag('event', 'diagnosis_complete', {
    'result_type': myType ? myType : 'unknown'
  });

  if (downloadLinkElement) {
    downloadLinkElement.addEventListener('click', function () {
      gtag('event', 'click_benefit_link', {
        'user_type': myType
      });
    });
  }

  const analyticsShareX = document.getElementById('share-x-btn');
  if (analyticsShareX) {
    analyticsShareX.addEventListener('click', function () {
      gtag('event', 'share_click', { 'method': 'X', 'user_type': myType });
    });
  }

  const analyticsShareLine = document.getElementById('share-line-btn');
  if (analyticsShareLine) {
    analyticsShareLine.addEventListener('click', function () {
      gtag('event', 'share_click', { 'method': 'LINE', 'user_type': myType });
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', function () {
      gtag('event', 'share_click', { 'method': 'ImageDownload', 'user_type': myType });
    });
  }
});