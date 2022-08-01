import items from "../items.json";

const storeItemsDiv = document.querySelector(".store-items");
const cartItemsDiv = document.querySelector(".cart-items");
const cartItemsBtn = document.querySelector(".cart-btn");

const storeItemTemplate = document.querySelector("#store-item-template");
const cartItemTemplate = document.querySelector("#cart-item-template");

const store = [...items];

// Decrease quantity of item in cart btn
// If 0, doesn't remove, but keeps it, just doesn't render it (handled by renderCart())
document.addEventListener("click", (e) => {
    if (!e.target.matches(".decrease-cart-item-quantity-btn")) return;

    let itemIDToDecrease = e.target.closest(".cart-item").id;
    let idxToDecrease = cart.findIndex((ci) => ci.item.id == itemIDToDecrease);
    cart[idxToDecrease].quantity--;

    renderCart();
});

// Remove cart item btn
document.addEventListener("click", (e) => {
    if (!e.target.matches(".remove-cart-item-btn")) return;

    let itemIDToRemove = e.target.closest(".cart-item").id;
    cart = cart.filter((ci) => ci.item.id != itemIDToRemove);

    renderCart();
});

// Add to cart BTN
document.addEventListener("click", (e) => {
    if (!e.target.matches(".add-to-cart")) return;
    let storeItemDiv = e.target.closest(".store-item");

    // if the item we clicked on is in the cart then increase its quantity

    let itemClickedOn = store.find((si) => si.id == storeItemDiv.id);
    let cartIndexOfItemClickedOn = cart.findIndex(
        (ci) => ci.item.id == itemClickedOn.id
    );
    if (cartIndexOfItemClickedOn == -1) {
        cart.push({
            item: itemClickedOn,
            quantity: 1,
        });
    } else {
        cart[cartIndexOfItemClickedOn].quantity++;
    }

    renderCart();
});

// Render store from store[]
function renderStore() {
    store.forEach((si) => {
        let storeItemElement = createStoreItemElement(si);
        storeItemsDiv.appendChild(storeItemElement);
    });
}

// Create a store Item Element (HTML) from a store[i]
function createStoreItemElement(si) {
    let storeItemTemplateClone = storeItemTemplate.content.cloneNode(true);
    let storeItem = storeItemTemplateClone.querySelector(".store-item");
    let storeItemDisplay = storeItem.querySelector(".item-display");
    let storeItemType = storeItem.querySelector(".item-type");
    let storeItemName = storeItem.querySelector(".item-name");
    let storeItemPrice = storeItem.querySelector(".item-price");

    storeItemDisplay.style.backgroundColor = si.color;
    storeItemType.innerText = si.type;
    storeItemName.innerText = si.color;
    storeItemPrice.innerText = `$ ${si.price}`;

    storeItem.id = si.id;
    return storeItem;
}

renderStore();

// Cart[i] contains item of the type:
let cart = [
    // { item: items[0], quantity: 1 },
    // { item: items[2], quantity: 2 },
    // { item: items[3], quantity: 0 },
];

renderCart();

// Cart show button
document.addEventListener("click", (e) => {
    if (e.target.matches(".cart-btn>img")) {
        cartItemsDiv.toggleAttribute("show");
    }
});

function renderCart() {
    // clear cart first, then rerender it
    cartItemsDiv.innerHTML = "";
    if (cart.length != 0) {
        document.querySelector(".cart-btn").setAttribute("show", "");
    } else {
        document.querySelector(".cart-btn").removeAttribute("show");
        cartItemsDiv.removeAttribute("show");
    }
    cart.forEach((ci) => {
        let cartItemElement = createCartItemElement(ci);
        if (cartItemElement) cartItemsDiv.appendChild(cartItemElement);
    });
}

function createCartItemElement(ci) {
    if (ci.quantity == 0) return null;

    let cartItemTemplateClone = cartItemTemplate.content.cloneNode(true);

    let cartItem = cartItemTemplateClone.querySelector(".cart-item");
    let cartItemDisplay = cartItem.querySelector(".cart-item-display");
    let cartItemName = cartItem.querySelector(".cart-item-name");
    let cartItemQuantity = cartItem.querySelector(".cart-item-quantity");
    let cartItemTotalPrice = cartItem.querySelector(".cart-item-total-price");

    cartItemDisplay.style.backgroundColor = ci.item.color;
    cartItemName.innerText = ci.item.color;
    cartItemQuantity.innerText = `x${ci.quantity}`;
    cartItemTotalPrice.innerText = `$ ${ci.item.price * ci.quantity}`;

    cartItem.id = ci.item.id;
    return cartItem;
}
