function getValue(elementId) {
  const element = document.getElementById(elementId);
  const value = parseFloat(element.innerText);
  return value;
}

function applyCoupon(totalPrice) {
  let discountAmount = "0.00";
  const discountElement = document.getElementById("discount");
  discountElement.innerText = discountAmount;
  const applyButton = document.getElementById("btn-apply");
  if (totalPrice > 199) {
    applyButton.removeAttribute("disabled");
  } else {
    applyButton.setAttribute("disabled", true);
  }
}

function makePurchase(totalPrice) {
  const purchaseButton = document.getElementById("btn-purchase");
  if (totalPrice > 0) {
    purchaseButton.removeAttribute("disabled");
  } else {
    purchaseButton.setAttribute("disabled", true);
  }
}

function setTotalPrice(elementId, totalPrice) {
  const totalPriceElement = document.getElementById(elementId);
  totalPriceElement.innerText = totalPrice;
}

function getTotalPrice(prodPriceId, previousTotalId) {
  const price = getValue(prodPriceId);
  const previousTotalPrice = getValue(previousTotalId);
  const totalPrice = previousTotalPrice + price;
  makePurchase(totalPrice);
  applyCoupon(totalPrice);
  setTotalPrice(previousTotalId, totalPrice);
  setTotalPrice("total", totalPrice);
  return totalPrice;
}

function addToProductList(cardTitle) {
  const productListElement = document.getElementById("product-list");
  const count = productListElement.childElementCount;
  const p = document.createElement("p");
  p.innerHTML = `${count + 1}. ${cardTitle}`;
  productListElement.appendChild(p);
}
