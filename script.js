
const products=[
{name:"Bluetooth Austiņas",price:25,cat:"tech",img:"https://via.placeholder.com/200"},
{name:"Sporta Apavi",price:40,cat:"fashion",img:"https://via.placeholder.com/200"},
{name:"LED Lampa",price:18,cat:"home",img:"https://via.placeholder.com/200"},
{name:"Telefona Vāciņš",price:12,cat:"tech",img:"https://via.placeholder.com/200"},
{name:"Hoodie",price:35,cat:"fashion",img:"https://via.placeholder.com/200"},
{name:"Dekora Svece",price:10,cat:"home",img:"https://via.placeholder.com/200"}
];

let cart=[];

function renderProducts(list){
const container=document.getElementById("products");
container.innerHTML="";

list.forEach((p,i)=>{
container.innerHTML+=`
<div class="product">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>${p.price} €</p>
<button onclick="addToCart(${i})">Pievienot</button>
</div>
`;
});
}

function showCategory(cat){
if(cat==="all"){renderProducts(products);return;}
renderProducts(products.filter(p=>p.cat===cat));
}

function addToCart(i){
cart.push(products[i]);
updateCart();
}

function updateCart(){
const list=document.getElementById("cart");
const total=document.getElementById("total");

list.innerHTML="";
let sum=0;

cart.forEach(p=>{
list.innerHTML+=`<li>${p.name} - ${p.price} €</li>`;
sum+=p.price;
});

total.textContent=sum;
}

renderProducts(products);
