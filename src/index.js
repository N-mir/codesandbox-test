import "./styles.css";

const onClickAdd = () => {
  // alert();

  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  // テキストボックスの値を初期化
  document.getElementById("add-text").value = "";
  // alert(inputText);

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // TODOリスト(divタグ部分)の生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);

  // liタグの生成
  const li = document.createElement("li");
  li.innerText = text;
  // console.log(li);

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //alert("完了");

    // 押された完了ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);
    // // もとから"未完了のTODO"にあるdivを削除する
    // const deleteTaret = completeButton.parentNode;
    // //console.log(deleteTaret);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div配下を初期化
    addTarget.textContent = null;

    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    // buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button(完了)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //alert("削除");
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    // // deleteTargetにdivタグ全体が取得される。
    // const deleteTarget = deleteButton.parentNode;
    // //console.log(deleteTarget);

    // // id = "incomplete-list"配下のdivタグを削除する。
    // document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // console.log(div);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  //console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
