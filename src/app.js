console.log("Merhaba Kodlama.io")

//JS type safe değildir (int string gibi tip belirtilmez. Her tür değşkeni tutabilir).
//let tüm değişkenler için kullanılır.
//const read-only tiptir. veri değiştirilemez

let dolarBugun = 9.30
let dolarDun = 9.20


console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 -- hata verir. const değiştirilemez 

//array
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi" ]

console.log("<ul>")
for(let i=0; i < konutKredileri.length; i++){
   console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
