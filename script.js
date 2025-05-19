let initialValue = 0;

document.getElementById("display").innerHTML = initialValue;

function incrementValue() {
  initialValue = initialValue + 1;
  document.getElementById("display").innerHTML = initialValue;
}

function decrementValue() {
  initialValue = initialValue - 1;
  document.getElementById("display").innerHTML = initialValue;
}
function clearValue() {
    initialValue = 0;
    document.getElementById("display").innerHTML = initialValue;
}
const incrementButton = document.getElementById('Add Product');
incrementButton.addEventListener('click', incrementValue);

const decrementButton = document.getElementById('Remove Product');
decrementButton.addEventListener('click', decrementValue);

const clearButton = document.getElementById('Clear');
clearButton.addEventListener('click', clearValue);