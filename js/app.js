//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

console.log(document.querySelectorAll('.block3'))

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

document.getElementById('disclaimer').innerHTML=finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.

document.getElementById('brand1').innerHTML='Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

document.getElementById('item1').innerHTML='Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.

document.getElementById('price1').innerHTML='$8.99';

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

document.getElementById('discount1').innerHTML='Free fries with purchase!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

let gin = document.createElement('div');
gin.id = 'item2';
gin.innerHTML = "Hendrick's Gin";
brand2.appendChild(gin);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

let pricegin = document.createElement('div');
pricegin.id = 'price2';
pricegin.innerHTML = '$34.99';
item2.appendChild(pricegin);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

let axeButton = document.createElement('button');
axeButton.id = 'discount3';
axeButton.innerHTML = '50% OFF Axe body soap!';
document.getElementsByClassName('block3')[0].appendChild(axeButton);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

document.getElementsByClassName('item')[0].innerHTML = 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

let tShirtButton = document.createElement('button');
tShirtButton.className = 'discount';
tShirtButton.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
document.getElementsByClassName('block1')[1].appendChild(tShirtButton);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

document.getElementsByClassName('brand')[1].innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

document.getElementsByClassName('price')[1].innerHTML = "10,000";

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

let headphonesBox = document.createElement('div');
headphonesBox.className = 'brand';
headphonesBox.innerHTML = 'Hifiman Shangri-La';
document.getElementsByClassName('block3')[1].appendChild(headphonesBox);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

let headphonesElec = document.createElement('div');
headphonesElec.className = 'item';
headphonesElec.innerHTML = 'Electronstatic Headphones';
document.getElementsByClassName('block3')[1].appendChild(headphonesElec);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

let headphonesPrice = document.createElement('div');
headphonesPrice.className = 'price';
headphonesPrice.innerHTML = '$18,000';
document.getElementsByClassName('block3')[1].appendChild(headphonesPrice);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

let headphonesBut = document.createElement('button');
headphonesBut.className = 'discount';
headphonesBut.innerHTML = 'Free Barry Manilow CD with purchase!';
document.getElementsByClassName('block3')[1].appendChild(headphonesBut);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M

document.getElementsByClassName('brand')[3].innerHTML = 'H&M';

//div.item =  Unicorn-Head Slippers

document.getElementsByClassName('item')[3].innerHTML = 'Unicorn-Head Slippers'

//div.price = $21.99

document.getElementsByClassName('price')[3].innerHTML = '$21.99';

// button.discount = Free knee-high tube socks with purchase!

document.getElementsByClassName('discount')[3].innerHTML = 'Free knee-high tube socks with purchase!';

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay

document.getElementsByClassName('brand')[4].innerHTML = 'Frito Lay';

//div.item =  Poppin' Jalapeno Doritos

document.getElementsByClassName('item')[4].innerHTML = "Poppin' Jalapeno Doritos";

//div.price = $7.77

document.getElementsByClassName('price')[4].innerHTML = '$7.77';

// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

document.getElementsByClassName('discount')[4].innerHTML = '33% OFF any 6 pack Budweiser or Bud Light'

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder

document.getElementsByClassName('brand')[5].innerHTML = 'Any Dog Breeder';

//div.item =  Baby Puggy

document.getElementsByClassName('item')[5].innerHTML = 'Baby Puggy';

//div.price = Priceless

document.getElementsByClassName('price')[5].innerHTML = 'Priceless';

// button.discount = No Discounts. This cutie is worth every penny!

document.getElementsByClassName('discount')[5].innerHTML = 'No Discounts. This cutie is worth every penny!';

//Final Boss 
//Create your own product for the last three sections.

document.getElementsByClassName('block1')[3].childNodes[0].src = 'https://cdn.shopify.com/s/files/1/2062/5873/products/1_697cb249-294f-4315-bb9c-982cdf81ebf8_x700.jpg?v=1530638998';
document.getElementsByClassName('brand')[6].innerHTML = 'Dwarfcraft';