function changeClass() {
    document.getElementById("gradientCandy" ).className = "onHoover";

}
function nothing() {
    document.getElementById("gradientCandy").className = "";
}


let product = [
    {image:"/img/candies.png", name:'Bubble Gum', price:20, info: ' square flecks of real Mexican chicles in a bright pink color. Grab a handful of the chewy tidbits and start chewing to meld them into one piece of yummy gum. '},
   { image:"/img/candy (1).png", name:'Sour Fish', price:15, info: 'Extreme sour WarHeads in five intense fruit flavors of blue raspberry, watermelon, black cherry, lemon, and apple are individually wrapped for grab-and-go convenience.'},
   { image:"/img/candy (2).png" , name:'Licorice', price:10, info: 'Your taste buds will leap like a kangaroo when they experience this gourmet cut black licorice imported from Australia! <br> amazing flavour'},
   { image:"/img/cotton-candy.png" , name:'Cotton Candy', price:35, info: 'One bite of these puffy cumulus clouds of sugar floss, raspberry-flavored blue cotton candy, will have your taste buds floating on cloud nine! Hosting a baby shower or other event with a blue color theme? '},
   { image:"/img/gummy-bear.png" , name:'Gummy Bears', price:40, info: 'High-brow bears with sophisticated fruity flavors, these delicious candy creatures are not your everyday gummy bear. You"ll want to save these sweets for your favorite friends and family.'},
   { image:"/img/lollipop.png" , name:'Lollipop', price:5, info: 'Well, we can assure you that your suddenly growling stomach has as much to do with this hypnotic pattern as it does with the fact that these little lollipops look just as delicious as they taste!'}
];


product.forEach(element => {document.getElementById('output').innerHTML +=( `<div class="card" style="width: 18rem;">
<img src="${element.image}" class="card-img-top" alt="Candy">
<div class="card-body">
  <h5 id="product1">${element.name}<br>${element.price}$ </h5>
  <p class="card-text">${element.info}</p>
  <a onclick="printObject();" href="#" class="btn btn-primary">Buy now</a>
</div>
</div>`)
});

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

