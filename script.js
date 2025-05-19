const display = document.getElementById('display');
const addBtn = document.getElementById('add-product');
const removeBtn = document.getElementById('remove-product');
const clearBtn = document.getElementById('clear');

addBtn.addEventListener('click', () => {
  const newProduct = document.createElement('div');
  newProduct.className = 'product-item';
  newProduct.innerHTML = `
    <label>Description: <input type="text" placeholder="Enter product description..." /></label>
    <br><br>
  `;
  display.appendChild(newProduct);
});

removeBtn.addEventListener('click', () => {
  if (display.lastChild) {
    display.removeChild(display.lastChild);
  }
});

clearBtn.addEventListener('click', () => {
  display.innerHTML = '';
});
