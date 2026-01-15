document.addEventListener('DOMContentLoaded', function () {

  // --- 必要な部品を取得 ---
  const questions = document.querySelectorAll('.question-box');
  const answerButtons = document.querySelectorAll('.answer-button');
  const progressBar = document.getElementById('progress-bar');
  const totalQuestions = questions.length;

  // --- 点数を管理する変数 (配列ではなく合計点を直接計算します) ---
  let scores = {
    progress: 0,    // 進捗軸の合計点
    motivation: 0   // 気合い軸の合計点
  };

  let currentQuestionIndex = 0; // 現在の質問番号
  // --- 進捗バー更新関数 ---
  function updateProgress() {
    const progressPercent = (currentQuestionIndex / totalQuestions) * 100;
    if (progressBar) {
      progressBar.style.width = progressPercent + '%';
    }
  }

  // --- ボタンが押されたときの処理 ---
  answerButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      // 1. 親要素(question-box)から「これはどっちの軸か？」を取得
      const parentBox = this.closest('.question-box');
      const type = parentBox.dataset.type; // "progress" または "motivation"
      // 2. ボタンの data-value (A, B, C) を取得して点数化
      const value = this.dataset.value;

      gtag('event', 'question_answered', {
        'question_number': currentQuestionIndex + 1, // Q1, Q2...
        'answer': value // A, B, C
      });
      let points = 0;

      if (value === 'A') {
        points = 3;
      } else if (value === 'B') {
        points = 2;
      } else if (value === 'C') {
        points = 1;
      }

      // 3. 対応する軸のスコアに加算
      if (type === 'progress') {
        scores.progress += points;
      } else if (type === 'motivation') {
        scores.motivation += points;
      }

      //console.log(`現在の得点状況:`, scores); // 確認用ログ

      // 4. 画面切り替え処理 (ここは今まで通り)
      questions[currentQuestionIndex].style.display = 'none'; // 今のを消す
      currentQuestionIndex++; //次へ

      if (currentQuestionIndex < totalQuestions) {
        // 次の質問があれば表示
        questions[currentQuestionIndex].style.display = 'block';
        updateProgress();
      } else {
        // 全問終了
        if (progressBar) progressBar.innerText = "完了!";
        calculateResult();
      }
    });
  });

  // 初期プログレスバー設定
  if (progressBar) progressBar.style.width = '0%';

  // --- 結果判定関数 ---
  function calculateResult() {
    //console.log('全問終了。計算結果を表示します。');
    // ★配列計算ロジックは不要になりました。scores変数をそのまま使います。
    const progressScore = scores.progress;
    const motivationScore = scores.motivation;

    //console.log(`最終スコア -> 進捗: ${progressScore}点, 気合い: ${motivationScore}点`);

    // レベル判定 (閾値設定)
    // High: 13点〜15点
    // Mid : 9点〜12点
    // Low : 5点〜8点 (最低点は1点x5問=5点)
    function getLevel(score) {
      if (score >= 13) return 'High';
      if (score >= 9) return 'Mid';
      return 'Low';
    }

    const progressLevel = getLevel(progressScore);
    const motivationLevel = getLevel(motivationScore);

    // 9タイプの決定
    let finalType = 'T9'; // デフォルト

    if (progressLevel === 'High' && motivationLevel === 'High') {
      finalType = 'T1';
    } else if (progressLevel === 'Mid' && motivationLevel === 'High') {
      finalType = 'T2';
    } else if (progressLevel === 'Low' && motivationLevel === 'High') {
      finalType = 'T3';
    } else if (progressLevel === 'High' && motivationLevel === 'Mid') {
      finalType = 'T4';
    } else if (progressLevel === 'Mid' && motivationLevel === 'Mid') {
      finalType = 'T5';
    } else if (progressLevel === 'Low' && motivationLevel === 'Mid') {
      finalType = 'T6';
    } else if (progressLevel === 'High' && motivationLevel === 'Low') {
      finalType = 'T7';
    } else if (progressLevel === 'Mid' && motivationLevel === 'Low') {
      finalType = 'T8';
    } else {
      finalType = 'T9';
    }

    console.log(`判定: 進捗${progressLevel} x 気合い${motivationLevel} -> ${finalType}`);

    // 結果を保存してページ遷移
    localStorage.setItem('shindanResultType', finalType);
    window.location.href = 'result.html';
  }
});