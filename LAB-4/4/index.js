function stringFetcher() {
  var returnStr = "";
  var str = document.getElementById("str").value;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      for (let j = i + 1; j < str.length; j++) {
        if (str[j] == "a") {
          alert(returnStr);
        }
        returnStr = returnStr + str[j];
      }
    }
  }
}
