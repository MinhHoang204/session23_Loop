function drawTriangle() {
    var rows = document.getElementById("rows").value;
    var output = "";
    for (var i = 1; i <= rows; i++) {
      for (var j = 1; j <= i; j++) {
        output += "*";
      }
      output += "<br>";
    }
    output += "<br>";
    for (var i = rows; i >= 1; i--) {
      for (var j = 1; j <= i; j++) {
        output += "*";
      }
      output += "<br>";
    }
    document.getElementById("output").innerHTML = output;
  }