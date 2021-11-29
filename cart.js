let carts = document.querySelectorAll('.btn');
let products = [
    {image:"/img/candies.png",incart: 0, name:'Bubble Gum', price:20, info: ' square flecks of real Mexican chicles in a bright pink color. Grab a handful of the chewy tidbits and start chewing to meld them into one piece of yummy gum. '},
   { image:"/img/sourfish.png",incart: 0,  name:'Sour Fish', price:15, info: 'Extreme sour WarHeads in five intense fruit flavors of blue raspberry, watermelon, black cherry, lemon, and apple are individually wrapped for grab-and-go convenience.'},
   { image:"/img/licorice.png" ,incart: 0,  name:'Licorice', price:10, info: 'Your taste buds will leap like a kangaroo when they experience this gourmet cut black licorice imported from Australia! <br> amazing flavour'},
   { image:"/img/cotton-candy.png" ,incart: 0,  name:'Cotton Candy', price:35, info: 'One bite of these puffy cumulus clouds of sugar floss, raspberry-flavored blue cotton candy, will have your taste buds floating on cloud nine! Hosting a baby shower or other event with a blue color theme? '},
   { image:"/img/gummy-bear.png" ,incart: 0,  name:'Gummy Bears', price:40, info: 'High-brow bears with sophisticated fruity flavors, these delicious candy creatures are not your everyday gummy bear. You"ll want to save these sweets for your favorite friends and family.'},
   { image:"/img/lollipop.png" ,incart: 0,  name:'Lollipop', price:5, info: 'Well, we can assure you that your suddenly growling stomach has as much to do with this hypnotic pattern as it does with the fact that these little lollipops look just as delicious as they taste!'} 
];

// loopar alla add to cart btns på produkterna och lägger eventlistener på click
for(let i = 0; i < carts.length; i++){
carts[i].addEventListener('click', ()=> {
    //lägger till arrayen i parametern för att skriva den produkten man klickar på
    cartNumbers(products[i]);
    totalCost(products[i]);
    addedToCart();
})
}


// skapar funtion för ADDED TO CART effekt
// function addedToCart(){
//     let addedToCart = document.querySelector('.btn')
//     addedToCart.innerHTML = 'Added to cart';
//     addedToCart.classList.add('added-To-Cart');
  
    
    // addEventListener("mouseout", addedToCart.innerHTML = 'Add to cart');
//    }

   
  
//skapar function för nollan bredvid shop iconen för att inte försvinna vid uppdatering av sida
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    let totalItems = document.getElementById('totalItems');
    let totalItems2 =document.getElementById('totalItems2');
    if(productNumbers){
        document.getElementById('cart-number').textContent = productNumbers;
    }
    if(productNumbers){
        totalItems.innerText = productNumbers+' '+'items';
        totalItems2.innerHTML = productNumbers +' '+'items';
    }
    
}

//använder local storage skapar function för click och adderar antalet produkt som klickas, lägger till arrayen i parametern för att skriva den produkten man klickar på
function cartNumbers(products, action){
    //hämtar från local storage med metoden getItem
let productNumbers = localStorage.getItem('cartNumbers');
//ändrar från string till ett nummer då i localstorage var de en string
productNumbers = parseInt(productNumbers);
let cartItems = localStorage.getItem('productsInCart');
cartItems = JSON.parse(cartItems);

if(action == "decrease"){
    localStorage.setItem('cartNumbers', productNumbers - 1);
     document.getElementById('cart-number').textContent = productNumbers -1;
}else if ( productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.getElementById('cart-number').textContent = productNumbers +1;
    }else {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.getElementById('cart-number').textContent =  1;
}


//set item på local storage  
//gör en if sats om en produkt finns redan i localstorage om de finns så adderar vi med 1
// if( productNumbers){
//     localStorage.setItem('cartNumbers', productNumbers + 1);
//     document.getElementById('cart-number').textContent = productNumbers +1;
// }else{
//     localStorage.setItem('cartNumbers',1);
//     //hämtar nollan bredvid cart iconen som ska incrementa
//     document.getElementById('cart-number').textContent = 1;
// }
  setItems(products);
}
//function för att sätta objekt namnen i localstorage och hur många incart
function setItems(products){
    let cartItems = localStorage.getItem('productsInCart');
    //JSON parse får json till javascript
    cartItems = JSON.parse(cartItems);
    

    console.log('my cart items are', cartItems);
    //if statements för incart i arrayen
    if( cartItems != null){

        if(cartItems[products.name] == undefined){
            cartItems = {
                ...cartItems,
                [products.name]: products
            }
        }
        //increments incart i arrayen + 1
        cartItems[products.name].incart +=1;
    }else{
        products.incart = 1;
        cartItems = {
            [products.name]:products
        }
    }
    
    //JSON stringify är från javascript till JSON
    localStorage.setItem('productsInCart',JSON.stringify (cartItems));
}
//skapar function för totalkostnad
function totalCost(products, action){
//console.log('the price is', products.price);
let cartCost = localStorage.getItem('totalCost');

console.log('my cartcost is', cartCost);
console.log(typeof cartCost);
if( action == "decrease"){
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost - products.price);
}else if(cartCost != null){
    cartCost = parseInt(cartCost);
 localStorage.setItem('totalCost', cartCost + products.price);
}else{
    localStorage.setItem('totalCost',products.price);
}

}

function displayCart(){
    console.log('displayCart')
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector('.product-cart');

    let totalPrice = document.getElementById('totalPrice');

    let totalPriceCheckout = document.getElementById('TOTALPRICE');

    let cartCost = localStorage.getItem('totalCost');
    

    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        

        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `<div class="row">
            <div class="row main align-items-center">
                <div class="col-2"><img class="img-fluid" src=${item.image}></div>
                <div class="col">
                    <div class="row text-muted">Candy</div>
                    <div class="row-name">${item.name}</div>
                </div>
                <div class="col"> <button class="decrease">-</button><span class="border1">${item.incart} </span><button class="increase">+</button> </div>
                <div class="col">&euro;${item.price} <button class="delete">x</button></div>
            </div>
          </div> <br>`
        });
        totalPrice.innerHTML = '$' + cartCost+'.00';
        totalPriceCheckout.innerHTML = '$' + cartCost +'.00';
    }
   
    //invokar delete functionen där vi displayar våran displaycart function
    deleteButtons();
    manageQuantity();
}

//skapar function för att ta bort object
function deleteButtons(){
    let deleteButtons = document.querySelectorAll('.delete');
    let productName;
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem('totalCost');
    console.log(deleteButtons)
   
    

    //loopar genom alla delete buttons som skapas och skapar en click listener på alla
    for(let i = 0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click', ()=>{
            //för varje delete klick så svaras det vilken produkt som klickas delete på
           productName = deleteButtons[i].parentElement.parentElement.childNodes[3].childNodes[3].textContent;
           console.log(productName);
           console.log(cartItems['Bubble Gum'])
           
            
           localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].incart);
            localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].incart));
            
            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
//invokar displaycart och onloadcartnumber för att uppdatera kassan efter man delete en produkt.
            
            onLoadCartNumbers(); 
            displayCart();
        });
    }
}
//function för att använda knapparna för att öka ett värde på en produkt samt sänka.
function manageQuantity(){
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let cartItems = localStorage.getItem('productsInCart');
    let currentProduct = "";
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);

    for(let i=0; i< decreaseButtons.length; i++ ){
        decreaseButtons[i].addEventListener('click',()=>{
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.parentElement.childNodes[3].childNodes[3].textContent;
            console.log(currentProduct);

            
            if(cartItems[currentProduct].incart > 1){
            cartItems[currentProduct].incart -= 1;
            cartNumbers(cartItems[currentProduct], "decrease");
            totalCost(cartItems[currentProduct], "decrease");
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        }
        });
    }

    for(let i=0; i< increaseButtons.length; i++ ){
        increaseButtons[i].addEventListener('click',()=>{
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);

            
            currentProduct = increaseButtons[i].parentElement.parentElement.childNodes[3].childNodes[3].textContent;
            console.log(currentProduct);

            
            
            cartItems[currentProduct].incart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        
        })
    }
}

onLoadCartNumbers();
displayCart();