let allTotal=0;

function watch(element){

let myMovie=element.closest('.single-movie')
let price=myMovie.querySelector('p').innerText;
price=parseInt(price.substring(1));
let picture=myMovie.querySelector('img')
picture.src='img/reserved.jpg'
element.setAttribute('disabled','true');
let cost=document.querySelector('.cost');
allTotal+=price;

cost.innerHTML=`<h2>Total: $${allTotal}</h2>`
}