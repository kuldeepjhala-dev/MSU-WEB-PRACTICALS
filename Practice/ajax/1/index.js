function loadDoc() {
  const xhttp = new XMLHttpRequest(); //create object
  xhttp.onload = function () {
    document.getElementById("demo").innerHTML = this.responseText;
  };
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}
