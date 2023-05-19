// search.js
window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("search-form").addEventListener("submit", function(event) {
      event.preventDefault(); // フォームのデフォルトの送信をキャンセル
  
      var keyword = document.getElementById("search-input").value;
  
      // キーワードをエンコードして検索URLを生成
      var encodedKeyword = encodeURIComponent(keyword);
      var searchUrl = "https://DiamondGotCat.GitHub.io/search?q=" + encodedKeyword;
  
      // リダイレクトする場合
      // window.location.href = searchUrl;
  
      // もしくは、検索結果を表示する要素に設定する
      var searchResults = document.getElementById("search-results");
      searchResults.innerHTML = "<iframe src='" + searchUrl + "'></iframe>";
    });
  });
  