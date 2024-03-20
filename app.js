const iceCream = [{
  name: 'Cookie Dough',
  price: 1.25,
  quantity: 0
},
{
  name: 'Vanilla',
  price: 1,
  quantity: 0
},
{
  name: 'Strawberry',
  price: 1.25,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  quantity: 0,
  price: .25
},
{
  name: 'Chocolate Chips',
  price: .25,
  quantity: 0
},
{
  name: 'Cookie Chunks',
  price: .5,
  quantity: 0
}]


function orderIceCream(name) {
  let iceCreamFlavor = iceCream.find(someIceCream => someIceCream.name == name);
  totalPrice()
}

function orderCookieDough() {
  let iceCreamCookieDough = iceCream[0]
  iceCreamCookieDough.quantity++
  totalPrice()
}

function orderVanilla() {
  let iceCreamVanilla = iceCream[1]
  iceCreamVanilla.quantity++
  totalPrice()
}

function orderStrawberry() {
  console.log('Ordering Strawberry')
  let iceCreamStrawberry = iceCream[2]
  console.log('Bought Strawberry', iceCreamStrawberry)
  iceCreamStrawberry.quantity++
  totalPrice()

}

function orderSprinkles() {
  console.log('Ordering Sprinkles')
  let sprinkles = toppings[0]
  console.log('Bought Sprinkles', sprinkles)
  sprinkles.quantity++
  totalPrice()
}


function orderChocolateChips() {
  console.log('Ordering Chocolate Chips')
  let chocolateChips = toppings[1]
  console.log('Bought Chocolate Chips', chocolateChips)
  chocolateChips.quantity++
  totalPrice()
}


function orderCookieChunks() {
  console.log('Ordering Cookie Chunks')
  let cookieChunks = toppings[2]
  console.log('Bought Cookie Chunks', cookieChunks)
  cookieChunks.quantity++
  totalPrice()
}

// function drawCart()


function totalPrice() {
  let cartContent = ''
  let cartTotal = 0
  for (let i = 0; i < iceCream.length; i++) {
    let iceCreamScoop = iceCream[i]
    if (iceCreamScoop.quantity > 0) {
      console.log('Ice Cream Scoop', iceCreamScoop)
      const scoopTotal = iceCreamScoop.quantity * iceCreamScoop.price
      cartTotal += scoopTotal
      console.log('Total', cartTotal);
      cartContent += `<p> ${iceCreamScoop.name} | qty: ${iceCreamScoop.quantity}</p>`;
    }
  }

  for (let i = 0; i < toppings.length; i++) {
    let topping = toppings[i]
    if (topping.quantity > 0) {
      console.log('Toppings', topping)
      let toppingTotal = topping.quantity * topping.price
      cartTotal += toppingTotal
      console.log('Total', cartTotal);
      cartContent += `<p> ${topping.name} | qty: ${topping.quantity}</p>`;
    }

  }


  let cartItemsElm = document.getElementById('cart-items')
  cartItemsElm.innerHTML = cartContent
  console.log('Cart Content', cartContent)

  let totalElm = document.getElementById('total')

  totalElm.innerHTML = `${cartTotal.toFixed(2)}`
}
