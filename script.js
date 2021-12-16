var res = 0;
var cur = "";
var num = "";
var symbol = "";

//check symbol
function checksymbol() {
  if (symbol == "+") {
    res = Number(num) + Number(cur);
    num = String(res);
  }
  if (symbol == "-") {
    res = Number(num) - Number(cur);
    num = String(res);
  }
  if (symbol == "/") {
    res = Number(num) / Number(cur);
    num = String(res);
  }
  if (symbol == "x") {
    res = Number(num) * Number(cur);
    num = String(res);
  }
}

//ac
function clearres() {
  res = 0;
  cur = "";
  num = "";
  symbol = "";
  document.getElementById("display").innerHTML = res;
}

///x-+
function sign(id) {
  var s = document.getElementById(id);
  document.getElementById("display").innerHTML = s.value;
  if (symbol == "") {
    num = cur;
    cur = "";
    symbol = s.value;
  } else
  if (cur == "" && s.value != "-") {
    symbol = s.value;
  } else
  if (cur == "-" && s.value != "-") {
    cur = "";
    symbol = s.value;
  } else
  if (cur == "" && s.value == "-") {
    cur = "-";
  } else
  if (symbol == "=") {
    num = res;
    cur = "";
    symbol = s.value;
  } else {
    checksymbol();
    cur = "";
    symbol = s.value;
  }

}

//1234567890
function number(id) {
  var n = document.getElementById(id).value;
  if (cur == "0" && n == "0") {
    return;
  }
  if (symbol == "=") {
    clearres();
  }
  if (symbol == "") {
    num = "";
  }
  if (cur != "") {
    if (cur.length <= 20) {
      cur = cur + n;
    }
  } else {
    cur = n;
  }
  document.getElementById("display").innerHTML = cur;
}

//.
function dec() {
  if (!cur.includes(".")) {
    if (cur.length <= 20) {
      cur = cur + ".";
    }
  }
  document.getElementById("display").innerHTML = cur;
}

//=
function equals() {
  if (num == "") {
    res = Number(cur);
  } else {
    checksymbol();
  }

  symbol = "=";
  cur = "";
  document.getElementById("display").innerHTML = res;
}