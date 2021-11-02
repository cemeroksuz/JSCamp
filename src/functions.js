function addToCart(productName="Elma", quantity) {
    console.log("Sepete Eklendi: " + productName + " Adet: " + quantity)
}

addToCart(undefined,10) //undefined = değer göndermeyceğim, default değeri gönder
 
let sayHello = () => {
    console.log("Hello World")
}

sayHello()

//object
function addtoCart1(productName, quantity, unitPrice) {
    
}
addtoCart1("Elma", 5, 20)
addtoCart1("Armut", 2, 20)
addtoCart1("Limon", 3, 15)

function addToCart2(product) {
    console.log("Ürün: "+ product.productName)
    console.log("Adet: "+ product.quantity )
    console.log("Fiyat: "+ product.unitPrice)

}
let product1={productName:"Elma", quantity:5, unitPrice:20}
addToCart2(product1)

function addToCart3(products) {
    console.log(products)
}
let products = [
    {productName: "Elma", unitPrice: 10, quantity: 5},
    {productName: "Armut", unitPrice: 10, quantity: 5},
    {productName: "Karpuz", unitPrice: 10, quantity: 5}

]
addToCart3(products)

//rest parametre
function add(...numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]    
    }
    console.log(total);    
}
add(20,30)
add(20,30,40)
add(20,30,40,50)

//spread
let numbers = [20, 130, 50, 20]
console.log(Math.max(...numbers))

//Destructing array kullanımı
let [icAnadolu, marmara, karadeniz,[icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    {name:"İç Anadolu",population: "20M"},
    {name:"Marmara",population: "30M"},
    {name:"Karadeniz",population: "10M"},
    [
        ["Ankara", "Konya" ],
        ["İstanbul", "Bursa" ],
        ["Sinop", "Trabzon" ],
    ]
]
console.log(marmara.name)
console.log(marmara.population)
console.log(icAnadoluSehirleri[0])
//destructing objet kullanımı
let newproductName, newunitPrice, newquantity
({productName: newproductName, unitPrice: newunitPrice, quantity: newquantity} = {productName: "Elma", unitPrice: 10, quantity: 5})
console.log(newproductName)
console.log(newunitPrice)
console.log(newquantity)


