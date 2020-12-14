var counter = 0;

function more() {
 counter = counter + 1;

 document.getElementById("number")
  .innerHTML = counter;
}

function minus() {
 counter = counter - 1;

 document.getElementById("number")
  .innerHTML = counter;
}


function more5() {
 counter = counter + 5;

 document.getElementById("number")
  .innerHTML = counter;
}

function minus5() {
 counter = counter - 5;

 document.getElementById("number")
  .innerHTML = counter;
}

function add() {
 counter = document.getElementById("number3").value

document.getElementById("number")
  .innerHTML = counter;
}
