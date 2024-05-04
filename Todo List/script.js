let itemsArr = [];

const itemsDiv = document.getElementById("items");
const input = document.getElementById("itemInput");
const storageKey = "items";


function showItems() {
    itemsDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(itemsArr)) {
        const container = document.createElement("div");
        container.style.marginBottom = "10px";

        const text = document.createElement("p");
        text.style.display = "inline";
        text.style.marginRight = "10px";
        text.textContent = item;

        const button = document.createElement("button");
        button.textContent = "Delete";
        button.style.backgroundColor = "red";
        button.onclick = () => removeItem(idx); // we have arrow function to call removeItem function. (wrapper syntax)

        container.appendChild(text);
        container.appendChild(button);

        itemsDiv.appendChild(container);
    }
}


function loadItems() {
    const oldItems = localStorage.getItem(storageKey);
    if (oldItems) {
        itemsArr = JSON.parse(oldItems);
        showItems();
    }
    
}


function saveItems() {
    const stringItems = JSON.stringify(itemsArr);
    lacalStorage.setItem(storageKey, stringItems);
}

function addItem() {
    const value = input.value;
    if (!value) {
        alert("You cannot add an empty item")
        return
    }
    itemsArr.push(value);
    showItems();
    input.value = "";
    saveItems();
}

function removeItem(idx) {
    itemsArr.splice(idx, 1);
    showItems();
    saveItems();

}

document.addEventListener("DOMContentLoaded", loadItems)  // this will automatically call loadItems function for us