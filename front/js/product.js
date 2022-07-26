var str= window.location.href;
var url = new URL(str);
var id = url.searchParams.get("id");
console.log(id);
// returning product id

let source = 'http://localhost:3000/api/products';
fetch(source).then((response) => 
response.json().then((data) => {
    console.log(data);
//returning API table of data
var product = data.findIndex(item => item._id === id);
console.log(product);
//returning object number corresponding to id
console.log(data[product]);
//returning all object parameters
var productimage = data[product].imageUrl;
var productalttxt = data[product].altTxt;
var productname = data[product].name;
var productprice = data[product].price;
var productdescription = data[product].description;
var productcolor = data[product].colors;
console.log(productcolor);

let affichageimg = `<img src="${productimage}" alt="${productalttxt}">`;
    {
        document.getElementsByClassName('item__img')
        document.querySelector(".item__img").innerHTML = affichageimg
    }

window.onload = function displayproduct() {
        document.getElementById('title')
            .insertAdjacentHTML('afterbegin', `
        ${productname}
        `)
        document.getElementById('price')
            .insertAdjacentHTML('afterbegin', `
        ${productprice}
        `)
        document.getElementById('description')
        .insertAdjacentHTML('afterbegin', `
        ${productdescription}
        `)
        for (let colors of productcolor){
        document.getElementById('colors')
        .insertAdjacentHTML('afterbegin', `
        <option value="${colors}">${colors}</option>
        `)
        }
        
}
let colors = document.querySelector("#colors");
colors.addEventListener('change', (event) => {
    console.log(colors.value);
  });
let quantity = document.querySelector("#quantity");
quantity.addEventListener('change', (event) => {
    console.log(quantity.value);
});

/*class basketItem {
    constructor(productname, productcolor, productquantity) {
        this.productname = productname;
        this.productcolor = productcolor;
        this.productquantity = productquantity;
    }
}*/


let submit = document.getElementById('addToCart');
submit.onclick = () => {
    const basketItem = {
        productname: `${productname}`,
        productcolor: colors.value,
        productquantity: quantity.value,
    }
    console.log(basketItem);
checkStorage()
   //Check if local storage is empty
function checkStorage () {
    if (localStorage.getItem(`${productname}` + colors.value) === null){
        const local = localStorage.setItem(`${productname}` + colors.value, JSON.stringify(basketItem));
    }else{
        console.log("this product is already in basket");
        //> add current quantity value to it's quantity
    }
   }
}

let empty = document.getElementById('emptycart');
empty.onclick = () => {
    const local = localStorage.clear();
    }

}));

