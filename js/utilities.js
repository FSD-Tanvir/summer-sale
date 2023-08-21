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

function setTotalPrice(elementId, totalPrice){
    const totalPriceElement = document.getElementById(elementId)
    totalPriceElement.innerText = totalPrice
}

function getTotalPrice(prodPriceId, previousTotalId) {
  const price = getValue(prodPriceId);
  const previousTotalPrice = getValue(previousTotalId);
  const totalPrice = previousTotalPrice + price;
  setTotalPrice(previousTotalId, totalPrice)
  return totalPrice;
}


