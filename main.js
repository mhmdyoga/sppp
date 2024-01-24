function imgSlider(anything){
    document.querySelector ('.jordan').src= anything;
}

function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

const header = document.querySelector("header")

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", this.window.scrollY > 80)
});

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

let showCart = document.querySelector('.add-cart');
let showCarts = document.querySelector('#add-cart1');
let ShowCarts = document.querySelector('#add-cart2');
let showCartss = document.querySelector('#add-cart3');
let showCartsss = document.querySelector('#add-cart4');
let ShowCartss = document.querySelector('#add-cart5');

cartIcon.onclick = () => {
    cart.classList.add("active")
}
//close cart

closeCart.onclick = () => {
    cart.classList.remove("active")
}
// show cart
showCart.onclick = () => {
    cart.classList.add("active")
}
showCarts.onclick = () => {
    cart.classList.add("active")
}
ShowCarts.onclick = () => {
    cart.classList.add("active")
}
showCartss.onclick = () => {
    cart.classList.add("active")
}
showCartsss.onclick = () => {
    cart.classList.add("active")
}
ShowCartss.onclick = () =>{
    cart.classList.add("active")
}


//add to cart

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready()
}

function ready() {
    var removeCartButton = document.getElementsByClassName('cart-remove');
    for (var i = 0; i< removeCartButton.length; i++){
        var button =removeCartButton[i];
        button.addEventListener("click", removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i< quantityInputs.length; i++){
        var input =quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    //add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i< addCart.length; i++){
        var button=addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updatetotal();
}

function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value= 1;
    }
    updatetotal();
}

// add cart fnctin

function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src
    addProductToCart(title,price,productImg);
    updatetotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsName = cartItems.getElementsByClassName("cart-product");
    for (var i = 0; i < cartItemsName.length; i++) {
        if (cartItemsName[i].innerText == title){
            alert('you have already added this item to cart');
            return;
        }
    }
    var cartBoxContent = `
    <img src="${productImg}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-product">${title}</div>
        <div class="cart-price">${price}</div>
        <input
         type="number"
        name="" 
         id=""
        value="1" 
        class="cart-quantity">
    </div>
    <!--Remove item-->
    <i class="fa-solid fa-trash cart-remove"></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
    .getElementsByClassName('cart-remove')[0]
    .addEventListener("click", removeCartItem);
    cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener('change', quantityChanged)
}


// update total

    function updatetotal() {
        var cartContent = document.getElementsByClassName("cart-content")[0];
        var cartBoxes = cartContent.getElementsByClassName("cart-box");
        var total = 0;
        for (var i = 0; i < cartBoxes.length; i++) {
            var cartBox = cartBoxes[i];
            var priceElement = cartBox.getElementsByClassName("cart-price")[0];
            var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
            var price = parseFloat(priceElement.innerText.replace("$", ""));
            var quantity = quantityElement.value;
            total += price * quantity;

           document.getElementsByClassName("total-price")[0].innerText = "$" + total;
        }
    }

   