const addButton = document.getElementById("addItem")
const addItemName = document.getElementById("itemName")
const cart = document.getElementById("cart")

function addItem(){
    let li = document.createElement("li")
    li.innerText = addItemName.value
    let rButton = document.createElement("button")
    rButton.type = "button"
    rButton.class = "removeButton"
    rButton.innerText = "Remove"
    let eButton = document.createElement("button")
    eButton.type = "button"
    eButton.class = "editButton"
    eButton.innerText = "Edit"
    li.appendChild(rButton)
    li.appendChild(eButton)
    cart.appendChild(li)
}

addButton.addEventListener("click", addItem)