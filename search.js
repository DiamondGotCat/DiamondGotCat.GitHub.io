// search.js
document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault(); // フォームのデフォルトの送信をキャンセル
  
    var keyword = document.getElementById("search-input").value.toLowerCase(); // 入力されたキーワードを取得
  
    // JSONファイルの読み込み
    fetch("Search-Contents.json")
      .then(response => response.json())
      .then(data => {
        var results = data.filter(item => item.title.toLowerCase().includes(keyword) || item.description.toLowerCase().includes(keyword));
  
        var searchResults = document.getElementById("search-results");
        searchResults.innerHTML = ""; // 検索結果をクリア
  
        if (results.length === 0) {
          searchResults.innerHTML = "該当する結果はありません。";
        } else {
          results.forEach(result => {
            var resultItem = document.createElement("div");
            resultItem.innerHTML = "<h3>" + result.title + "</h3><p>" + result.description + "</p><a href='" + result.url + "'>詳細を見る</a>";
            searchResults.appendChild(resultItem);
          });
        }
      })
      .catch(error => console.error(error));
  });
  