
// card-1
document.getElementById("card-1").addEventListener("click", function () {
  const totalPrice = getTotalPrice("price-1", "total-price")
  applyCoupon(totalPrice)
  setTotalPrice('total', totalPrice)
});
// card-2
document.getElementById("card-2").addEventListener("click", function () {
  const totalPrice = getTotalPrice("price-2", "total-price")
  applyCoupon(totalPrice)
  setTotalPrice('total', totalPrice)
});
// card-3
document.getElementById("card-3").addEventListener("click", function () {
  const totalPrice = getTotalPrice("price-3", "total-price")
  applyCoupon(totalPrice)
  setTotalPrice('total', totalPrice)
});
// card-4
document.getElementById("card-4").addEventListener("click", function () {
  const totalPrice = getTotalPrice("price-4", "total-price")
  applyCoupon(totalPrice)
  setTotalPrice('total', totalPrice)
});
// card-5
document.getElementById("card-5").addEventListener("click", function () {
  const totalPrice = getTotalPrice("price-5", "total-price")
  applyCoupon(totalPrice)
  setTotalPrice('total', totalPrice)
});
// card-6
document.getElementById("card-6").addEventListener("click", function () {
  const totalPrice = getTotalPrice("price-6", "total-price")
  applyCoupon(totalPrice)
  setTotalPrice('total', totalPrice)
});


document.getElementById("btn-apply").addEventListener("click", function () {
  const couponField = document.getElementById("coupon");
  const coupon = couponField.value;
  const previousTotalPrice = getValue("total-price");

  let discountAmount = "0.00";
  let totalPrice = "";
  if (coupon === "SELL200") {
    discountAmount = (previousTotalPrice * 20) / 100;
  } else {
    alert("Please enter the coupon");
  }
  
  const discountElement = document.getElementById("discount");
  discountElement.innerText = discountAmount;
  const discount = parseFloat(discountElement.innerText);
  totalPrice = previousTotalPrice - discount;

  setTotalPrice('total', totalPrice)
});
