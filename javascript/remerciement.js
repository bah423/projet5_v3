
function getCommandInfo() {
    var order = sessionStorage.getItem("order")
    if(order!= undefined){
    var jsonOrder = JSON.parse(order)
    var command_orderId = document.getElementById("command_orderId")
    var command_price = document.getElementById("command_price")
    var command_email = document.getElementById("command_email")
    var totalPrice = 0;
    for ( i = 0; i < jsonOrder.products.length; i++){
        totalPrice += jsonOrder.products[i].price;
        
    }
    console.log(totalPrice);
    command_orderId.innerText = jsonOrder.orderId
    command_price.innerText = totalPrice/100;
    command_email.innerText = jsonOrder.contact.email
    }
}