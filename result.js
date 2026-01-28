document.addEventListener('DOMContentLoaded', function () {
  // 1. 診断結果データベース (9タイプ)
  const resultsData = {
    "T1": {
      name: "ゴールへまっしぐらな「トップランナー」",
      downloads: "files/t1_set.zip",
      image: "A1",
      features: [
        "準備は万端！納得内定が視野に入っている段階",
        "自分の軸がはっきりしている",
        "難易度の高い企業にも積極的に挑戦する",
      ],
      weakness: [
        "完璧主義になりがち",
        "軸にこだわりすぎて、選択肢が狭くなってしまう"
      ],
    },
    "T2": {
      name: "ムダなく内定を狙う「戦略家」",
      downloads: "files/t2_set.zip",
      image: "A2",
      features: [
        "行動に移しているものの、心の底からの熱意がブレがち",
        "効率重視の就活",
        "どこでもいいので、早めに内定が欲しい",
      ],
      weakness: [
        "モチベーションに波がある",
        "仕事への本質的な興味は薄い",
        "職種や企業の選択に、はっきりした理由がない"
      ],
    },
    "T3": {
      name: "周りに合わせて頑張る「まじめさん」",
      description: "あなたはタイプ3です。やる気はピカイチ！まず一歩を踏み出そう！",
      events: ["(T3向け) イベントE", "(T3向け) イベントF"],
      downloads: "files/t3_set.zip",
      image: "A3",
      features: [
        "周りのペースに合わせて動いている",
        "自分のやりたいことがはっきりとしていない",
        "就活を頑張っているのに、なんだか納得できない"
      ],
      weakness: [
        "自分のことをまだ理解しきっていない",
        "進路選択に「意味」が付いていない",
        "周りにスピードを合わせるのではなく、自分のために動く"
      ],
    },
    "T4": {
      name: "やる気が先走っちゃう「情熱家」",
      description: "あなたはタイプ4です。コツコツ進めていて偉い！自信を持って！",
      events: ["(T4向け) イベントG", "(T4向け) イベントH"],
      downloads: "files/t4_set.zip",
      image: "A4",
      features: [
        "誰よりもやる気に満ち溢れている",
        "やる気が空回りしがち",
        "情報収集や思考はしっかりしている",
        "具体的な行動や方法がいまいちわかっていない"
      ],
      weakness: [
        "・行動に移すのに時間がかかってしまう",
        "失敗を恐れすぎている",
        "完璧な準備を求めてしまいがち"
      ],
    },
    "T5": {
      name: "",
      description: "あなたはタイプ5です。自分のペースでOK！少しずつ進めよう。",
      events: ["(T5向け) イベントI", "(T5向け) イベントJ"],
      downloads: "files/t5_set.zip",
      image: "A5",
      features: [
        "着実に就活を進めている",
        "大きな遅れはないが、爆発的な勢いもない",
        "平均的な層の就活生"
      ],
      weakness: [
        "「標準」からなかなか抜け出せない",
        "周囲に言われた通りにしてしまいがち",
        "自分の本音を追求できていない"
      ],
    },
    "T6": {
      name: "なんだか波に乗れない「焦り屋さん」",
      description: "あなたはタイプ6です。興味の種を見つけよう。",
      events: ["(T6向け) イベントK", "(T6向け) イベントL"],
      downloads: "files/t6_set.zip",
      image: "A6",
      features: [
        "なんとなく選考を受けている",
        "各企業への本気度がやや低め",
        "良い結果がでないことに焦り出している",
      ],
      weakness: [
        "準備が中途半端になってしまうことがある",
        "モチベーションが下がってしまいがち",
        "就活の目的を明確にする",
      ],
    },
    "T7": {
      name: "理想だけがふくらむ「空想家」",
      description: "あなたはタイプ7です。もう一息！",
      events: ["(T7向け) イベントM", "(T7向け) イベントN"],
      downloads: "files/t7_set.zip",
      image: "A7",
      features: [
        "キャリアへの理想や熱意は強い",
        "やる気は人一倍",
        "就活に関する情報が不足している",
      ],
      weakness: [
        "理想をリアルな目標に変えよう",
        "具体的にやるべきことをリストアップしよう",
        "基本の「自己分析」と「企業研究」を徹底的にしよう",
      ],
    },
    "T8": {
      name: "なかなか踏み出せない「慎重派」",
      description: "あなたはタイプ8です。休憩も大事。",
      events: ["(T8向け) イベントO", "(T8向け) イベントP"],
      downloads: "files/t8_set.zip",
      image: "A8",
      features: [
        "就活をかなり意識し始めている",
        "まだ何から始めていいかわかっていない",
        "行動することへの不安や迷いが大きい",
      ],
      weakness: [
        "キャリア形成支援課や先輩に相談して、不安を解消しよう",
        "小さな目標を設定して自信をつけよう",
        "まずは説明会などに気軽に参加してみよう"
      ],
    },
    "T9": {
      name: "マイペースを貫く「自由人」",
      description: "あなたはタイプ9です。悩む前にまず相談！私たちがいます！",
      events: ["(T9向け) イベントQ", "(T9向け) イベントR"],
      downloads: "files/t9_set.zip",
      image: "A9",
      features: [
        "就活そのものへの関心や危機感が薄い",
        "今は、プライベートや学業が第一優先",
        "就活はまだしなくてもいいやと思いがち"
      ],
      weakness: [
        "キャリア形成支援課や先輩に相談して、不安を解消しよう",
        "小さな目標を設定して自信をつけよう",
        "まずは説明会などに気軽に参加してみよう",
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
  const weaknessListElement = document.getElementById('weakness-list');

  if (resultNameElement) resultNameElement.innerText = resultData.name;
  if (resultDescElement) resultDescElement.innerText = resultData.description;

  // 特徴リストを動的に生成する処理
  if (featuresListElement) {
    featuresListElement.innerHTML = ''; // まず中身をリセット
    if (resultData.features && Array.isArray(resultData.features)) {
      resultData.features.forEach(function (text) {
        const li = document.createElement('li');
        li.innerText = text;
        featuresListElement.appendChild(li);
      });
    }
  }

  //弱点リスト
  if (weaknessListElement) {
    weaknessListElement.innerHTML = ''; // まず中身をリセット
    if (resultData.weakness && Array.isArray(resultData.weakness)) {
      resultData.weakness.forEach(function (text) {
        const li = document.createElement('li');
        li.innerText = text;
        weaknessListElement.appendChild(li);
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
      downloadLinkElement.innerText = "ダウンロードページヘ";
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

  if (saveBtn) {
    saveBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const typeNumber = resultType.replace('T', '');
      const imageUrl = `images/imageDL/${typeNumber}.png`;
      const link = document.createElement('a');
      link.href = imageUrl;

      link.download = `shindan_result_${resultType}.png`; //ファイル名
      document.body.appendChild(link); // Firefox等での互換性のためbodyに追加
      link.click();
      document.body.removeChild(link); // 用が済んだら削除
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