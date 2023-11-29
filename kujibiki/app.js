function drawKuji() {
  // くじの種類
  var kujiList = ["大吉", "中吉", "小吉", "凶"];

  // ランダムにくじを選ぶ
  var result = kujiList[Math.floor(Math.random() * kujiList.length)];

  // ラッキーアイテムのリスト
  var luckyItems = ["幸運のペン", "ラッキーキーホルダー", "幸せのお守り", "笑顔の写真"];

  // ランダムにラッキーアイテムを選ぶ
  var luckyItem = luckyItems[Math.floor(Math.random() * luckyItems.length)];

  // 結果とラッキーアイテムを表示
  document.getElementById("result").innerHTML = "くじの結果は「" + result + "」です！";
  document.getElementById("lucky-item").innerHTML = "ラッキーアイテム：「" + luckyItem + "」";
}
