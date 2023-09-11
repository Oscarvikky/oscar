
const item = document.getElementById("item");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const submitButton = document.getElementById("submitButton");
const subtotalDisplay = document.getElementById("subtotalDisplay");
const itemsContainer = document.getElementById("div1")

let arr1 = [];

submitButton.addEventListener("click", () => {
    const allObj = {
        items: item.value,
        prices: parseFloat(price.value),
        quantities: parseFloat(quantity.value),
        subTotal: (parseFloat(price.value) * parseFloat(quantity.value))
    }
    
    arr1.push(allObj)
    
    itemsContainer.innerHTML = ""
    arr1.forEach((el, i)=>{
        itemsContainer.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${el.items}</td>
                <td>${el.quantities}</td>
                <td>${el.prices}</td>
                <td>${el.subTotal}</td>
                <td>
                    <button onclick="edit(${i})" class="btn btn-light editBtn">Edit</button>
                    <button onclick="del(${i})" class="btn btn-light deleteBtn"><i class="bi bi-x-lg"></i></button>
                </td>
                </tr>
            `
    })
         
    let wholeTotal = arr1.reduce((total, itemm)=>{
        return total + (itemm.prices * itemm.quantities)
    }, 0);
            
    subtotalDisplay.textContent = `Total: ${wholeTotal}`

    let stringAr = JSON.stringify(arr1)
    localStorage.setItem("arr1", stringAr)

    //Storing total into local storage
    localStorage.setItem("Total", wholeTotal)

    // Clear input fields after submission
    item.value = "";
    price.value = "";
    quantity.value = "";
    
    console.log(arr1)
})
let card = document.querySelector(".card");
let editToDo = document.getElementById("editToDo")
let theIndex;
let newItem = document.getElementById("newItem")
let newQuantity = document.getElementById("newQuantity")
let newPrice = document.getElementById("newPrice")

card.style.display = "none"
function edit(i){
    card.style.display == "none" ? card.style.display = "block" : card.style.display = "none"
    theIndex = i;   
}    

editToDo.addEventListener("click", ()=>{
    newObj = {
        items: newItem.value,
        prices: parseFloat(newPrice.value),
        quantities: parseFloat(newQuantity.value),
        subTotal: (parseFloat(newPrice.value) * parseFloat(newQuantity.value))
    }
    arr1.splice(theIndex, 1, newObj)
    // arr1.push(newObj)

    itemsContainer.innerHTML = ""
    arr1.forEach((el, i)=>{
        itemsContainer.innerHTML += `
        <tr>
        <td>${i}</td>
        <td>${el.items}</td>
        <td>${el.quantities}</td>
        <td>${el.prices}</td>
        <td>${el.subTotal}</td>
        <td>
        <button onclick="edit(${i})" class="btn btn-light editBtn">Edit</button>
        <button onclick ="del(${i})" class="btn btn-light deleteBtn"><i class="bi bi-x-lg"></i></button>
        </td>
        </tr>
        `
    })
    let wholeTotal = arr1.reduce((total, itemm) => {
        return total + (itemm.prices * itemm.quantities);
    }, 0);
    
    subtotalDisplay.textContent = `Total: ${wholeTotal}`;
    card.style.display = "none"
})   



    



function del(i){
    arr1.splice(i, 1);
    console.log(arr1)
    
    itemsContainer.innerHTML = ""
    arr1.forEach((el, i)=>{
        itemsContainer.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${el.items}</td>
                <td>${el.quantities}</td>
                <td>${el.prices}</td>
                <td>${el.subTotal}</td>
                <td>
                <button class="btn btn-light editBtn">Edit</button>
                <button onclick ="del(${i})" class="btn btn-light deleteBtn"><i class="bi bi-x-lg"></i></button>
                </td>
                </tr>
            `
    })
    let wholeTotal = arr1.reduce((total, itemm) => {
        return total + (itemm.prices * itemm.quantities);
    }, 0);
    
    subtotalDisplay.textContent = `Total: ${wholeTotal}`;
}