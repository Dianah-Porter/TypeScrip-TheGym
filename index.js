const menu = [
    {name: "Ibijumba", price: 8},
    {name: "Chips", price: 10},
    {name: "Meat", price: 15},
    {name: "CFanta", price: 7}
]

const cashInRegister = 100;
const orderQueue = []
let nextOrderId = 1;

function addNewPizza(pizza){
    menu.push(pizza)
}
addNewPizza({name: "burger", price: 5});


function placeOrder(pizzaName){
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    cashInRegister += selectedPizza.price
    const newOrder = {id: nextOrderId, pizza: selectedPizza , status: "ordered"}
    orderQueue.push(newOrder);
    return newOrder
}

function completeOrder(orderId){
    const order = orderQueue.find(order => order.id === orderId);
    order.status 
}

