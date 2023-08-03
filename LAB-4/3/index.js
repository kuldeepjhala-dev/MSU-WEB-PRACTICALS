function Validate() {
  var uname = document.getElementById("uname").value;
  var pwd = document.getElementById("pwd").value;
  if (uname.value == "" && pwd.value == "") {
    alert("Enter uname and password");
  } else {
    if (uname[0] == "_" || uname[0] == "@" || uname[0] >= 0 || uname <= 9) {
      alert("_, @ or 0-9 arent allowed");
    }
    if (pwd.length < 6 || pwd.length > 12) {
      alert("Password must be between 6 to 12 char");
    } else {
      alert("Welcome");
    }
  }
}
