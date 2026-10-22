const addButton = document.getElementById("addItem")
const addItemName = document.getElementById("itemName")
const cart = document.getElementById("cart")


function remove(){
    this.parentElement.remove()
}

function edit(){
    let li = this.parentElement
    let p = li.childNodes[0]
    p.innerText = ""

    let inp = document.createElement("input")
    inp.type = "text"
    inp.id = "newName"
    this.remove()

    let sButton = document.createElement("button")
    sButton.type = "button"
    sButton.id = "save"
    sButton.innerText = "Save"

    li.appendChild(inp)
    li.appendChild(sButton)
    sButton.addEventListener("click", saveEdit)
}

function saveEdit(){
    let oldLi = this.parentElement
    let li = document.createElement("li")
    let newName = oldLi.children[2].value
    console.log(oldLi.children)
    console.log(oldLi.children[2])
    oldLi.remove()
    let p = document.createElement("span")
    p.id = "txt"
    p.innerText = newName
    li.appendChild(p)

    let rButton = document.createElement("button")
    rButton.type = "button"
    rButton.class = "removeButtonFor"+newName
    rButton.innerText = "Remove"
    rButton.addEventListener("click", remove)

    let eButton = document.createElement("button")
    eButton.type = "button"
    eButton.class = "editButtonFor"+newName
    eButton.innerText = "Edit"
    eButton.addEventListener("click", edit)

    li.appendChild(rButton)
    li.appendChild(eButton)
    cart.appendChild(li)
}

function addItem(){
    let li = document.createElement("li")
    let newName = addItemName.value
    let p = document.createElement("span")
    p.id = "txt"
    p.innerText = newName
    li.appendChild(p)

    let rButton = document.createElement("button")
    rButton.type = "button"
    rButton.class = "removeButtonFor"+newName
    rButton.innerText = "Remove"
    rButton.addEventListener("click", remove)

    let eButton = document.createElement("button")
    eButton.type = "button"
    eButton.class = "editButtonFor"+newName
    eButton.innerText = "Edit"
    eButton.addEventListener("click", edit)

    li.appendChild(rButton)
    li.appendChild(eButton)
    cart.appendChild(li)
}

addButton.addEventListener("click", addItem)