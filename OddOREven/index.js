 function checkOddEven() {
  let num = document.getElementById("numOddEven").value;

  if (num === "") {
    document.getElementById("resultB").innerHTML = "Please enter a number.";
    return;
  }

  num = parseInt(num);

  if (num % 2 === 0) {
    document.getElementById("resultB").innerHTML = num + " is EVEN";
    document.getElementById("resultB").className = "even";
  } else {
    document.getElementById("resultB").innerHTML = num + " is ODD";
    document.getElementById("resultB").className = "odd";
  }
 }
