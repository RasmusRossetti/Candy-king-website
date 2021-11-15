function changeClass() {
    document.getElementById("gradientCandy" ).className = "onHoover";

}
function nothing() {
    document.getElementById("gradientCandy").className = "";
}


let product = [
    { name:'Bubble Gum', price:20},
   { name:'Sour Fish', price:15},
   { name:'Licorice', price:10},
   {  name:'Cotton Candy', price:35},
   {  name:'Gummy Bears', price:40},
   {  name:'Lollipop', price:5}
];

let foundItem1 = product.find((item) => {
    return item.name === 'Bubble Gum';   
});
document.getElementById('product1').innerHTML = foundItem1.name +'<br>'+ foundItem1.price + '$';


let foundItem2 = product.find((item) => {
    return item.name === 'Sour Fish'; 
});
document.getElementById('product2').innerHTML = foundItem2.name +'<br>'+ foundItem2.price + '$';

let foundItem3 = product.find((item) => {
    return item.name === 'Licorice'; 
});
document.getElementById('product3').innerHTML = foundItem3.name +'<br>'+ foundItem3.price + '$';

let foundItem4 = product.find((item) => {
    return item.name === 'Cotton Candy'; 
});
document.getElementById('product4').innerHTML = foundItem4.name +'<br>'+ foundItem4.price + '$';

let foundItem5 = product.find((item) => {
    return item.name === 'Gummy Bears'; 
});
document.getElementById('product5').innerHTML = foundItem5.name +'<br>'+ foundItem5.price + '$';

let foundItem6 = product.find((item) => {
    return item.name === 'Lollipop'; 
});
document.getElementById('product6').innerHTML = foundItem6.name +'<br>'+ foundItem6.price + '$';