
function getCommandInfo() {
    var order = sessionStorage.getItem("order")
    if(order!= undefined){
    var jsonOrder = JSON.parse(order)
    var command_orderId = document.getElementById("command_orderId")
    var command_price = document.getElementById("command_price")
    var command_email = document.getElementById("command_email")
    const reducer = (accumulator, currentValue) => accumulator.price + currentValue.price
    command_orderId.innerText = jsonOrder.orderId
    if(jsonOrder.products.length == 1){
        command_price.innerText = jsonOrder.products[0].price
    } else {
        command_price.innerText = jsonOrder.products.reduce(reducer)
    }
    command_email.innerText = jsonOrder.contact.email
    }
}