import "./styles.css";

const onClickAdd = () => {
  // alert();

  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  // テキストボックスの値を初期化
  document.getElementById("add-text").value = "";
  // alert(inputText);

  // TODOリスト(divタグ部分)の生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  // liタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;
  // console.log(li);

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  // console.log(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
