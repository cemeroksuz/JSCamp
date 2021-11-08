let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"Bardak", quantity:2, unitPrice:30},
    {id:3, productName:"Kalem", quantity:1, unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:2, unitPrice:100},
    {id:5, productName:"Kitap", quantity:3, unitPrice:30},
    {id:6, productName:"Pot", quantity:5, unitPrice:150}
]
//map
//"map" dizide dolaşma işlemi yapar.
console.log("<li>")
cart.map(product=>{
    console.log("<li>" + product.productName + " : "+ product.unitPrice * product.quantity + "</li>")

})
console.log("</ul>")


//filter
//dizide filtreleme işlemi yapar.
//2 adetten fazla olan ürünleri getir.
let quantityOver2 = cart.filter(product=>product.quantity > 2 & product.unitPrice < 100)
console.log(quantityOver2)

//reduce
//reduce dizideki elemanlar üzerinde işlme yapmayı sağlar.
//cart.reduce((toplanacak değişken, toplanacak obje)=> işlem, başlangıç değeri)
let total = cart.reduce((acc, product)=> acc + product.unitPrice * product.quantity, 0)
console.log(total)


function addtoCart(sepet) {
    sepet.push({ id:7, productName:"Ruhsat", quantity:1, unitPrice:20})
       
}
addtoCart(cart)
// console.log(cart)

let sayi = 10

//referans tip fonksiyoında ekleme yaparken değer tip ekleme yapmaz

function sayiTopla(number) {
    number +=1
}
sayiTopla(sayi)
// console.log(sayi)


