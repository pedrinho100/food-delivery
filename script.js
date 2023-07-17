function foodSelected(option) {
    const selectFood = document.querySelector('.pizza .select');
    if (selectFood !== null) {
      selectFood.classList.remove('select');
    }
    option.classList.add('select');
  
    buttonOrder();
  }
  
  function drinkSelected(option) {
    const selectDrink = document.querySelector('.drink .select');
    if (selectDrink !== null) {
      selectDrink.classList.remove('select');
    }
    option.classList.add('select');
  
    buttonOrder();
  }
  
  function dessertSelected(option) {
    const selectDessert = document.querySelector('.dessert .select');
    if (selectDessert !== null) {
      selectDessert.classList.remove('select');
    }
    option.classList.add('select');
  
    buttonOrder();
  }
  
  function buttonOrder() {
    const selectFood = document.querySelector('.pizza .select');
    const selectDrink = document.querySelector('.drink .select');
    const selectDessert = document.querySelector('.dessert .select');
  
    const finalButton = document.querySelector('.button-fixed');
  
    if (selectFood !== null && selectDrink !== null && selectDessert !== null) {
      finalButton.classList.add('click');
      finalButton.innerHTML = 'Close the Order';
    }
  }
  
  function closeOrder(finalButton) {
    if (finalButton.classList.contains('click')) {
      const name = prompt('What is your name?');
      const address = prompt('What is your address?');
  
      const pizzaOrder = document.querySelector('.pizza .select h3').innerText;
      const drinkOrder = document.querySelector('.drink .select h3').innerText;
      const dessertOrder = document.querySelector('.dessert .select h3').innerText;
  
      let pizzaPrice = parseFloat(
        document.querySelector('.pizza .select .price').innerText.replace('$', '').replace(',', '.')
      );
      let drinkPrice = parseFloat(
        document.querySelector('.drink .select .price').innerText.replace('$', '').replace(',', '.')
      );
      let dessertPrice = parseFloat(
        document.querySelector('.dessert .select .price').innerText.replace('$', '').replace(',', '.')
      );
  
      let total = (pizzaPrice + drinkPrice + dessertPrice).toFixed(2);
      const myString = `Hello:
     - Pizza: ${pizzaOrder}
     - Drink: ${drinkOrder}
     - Dessert: ${dessertOrder}
     Total: $ ${total}\n
     name: ${name}
     address: ${address}`;
      const url = 'https://wa.me/5561981072424?text=' + encodeURIComponent(myString);
  
      const pizzaConfirmation = document.querySelector('.pizza-confirmation');
      pizzaConfirmation.innerHTML = pizzaOrder;
  
      const pricePizza = document.querySelector('.pizza-price');
      pricePizza.innerHTML = '$ ' + pizzaPrice.toFixed(2).replace('.', ',');
  
      const drinkConfirmation = document.querySelector('.drink-confirmation');
      drinkConfirmation.innerHTML = drinkOrder;
  
      const priceDrink = document.querySelector('.drink-price');
      priceDrink.innerHTML = '$ ' + drinkPrice.toFixed(2).replace('.', ',');
  
      const dessertConfirmation = document.querySelector('.dessert-confirmation');
      dessertConfirmation.innerHTML = dessertOrder;
  
      const priceDessert = document.querySelector('.dessert-price');
      priceDessert.innerHTML = '$ ' + dessertPrice.toFixed(2).replace('.', ',');
  
      const popUp = document.querySelector('.background');
      popUp.classList.remove('display-none');
      const totalPrice = document.querySelector('.amount');
      totalPrice.innerHTML = '$ ' + total.replace('.', ',');
      if (!popUp.classList.contains('display-none')) {
        finalButton.classList.add('display-none');
      }
   }
}
function finalConfirmation() {
    open(url);
  }

function finalClose(){
   const popUp = document.querySelector('.background');
   popUp.classList.add('display-none');
   const finalButton = document.querySelector('.button-fixed');
   finalButton.classList.remove('display-none');
}
let url;