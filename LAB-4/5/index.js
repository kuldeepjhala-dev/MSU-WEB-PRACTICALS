function myFun(event) {
  let value = event.which;
  if (
    event.which == 97 ||
    event.which == 101 ||
    event.which == 105 ||
    event.which == 111 ||
    event.which == 117 ||
    event.which == 97 - 32 ||
    event.which == 101 - 32 ||
    event.which == 105 - 32 ||
    event.which == 111 - 32 ||
    event.which == 117 - 32
  ) {
    document.getElementById("keyPressedOutput").innerHTML =
      value + " which is a vowel.";
  } else {
    document.getElementById("keyPressedOutput").innerHTML = value;
  }
}

function keyupFunction() {
  document.getElementById("body").style.backgroundColor = "blue";
}

function keyDownFunction() {
  document.getElementById("body").style.backgroundColor = "white";
}
