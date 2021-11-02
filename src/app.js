let sayi1= 10
sayi1 = "Cem Eröksüz"
let student ={id:1, name:"Cem"}
//console.log(student)

function save(puan = 10,ogrenci ){
   //console.log(ogrenci.name+ " : "+ puan)
}

//undefined parametreyi atlatır. defoul bir arametre değer varsa o parametreyi atlayıp sonrakinden atama yapmaya devam eder.
//save(undefined,student)

let students = ["Cem Eröksüz", "Engin Demiroğ", "Halit Kalaycı","Büşra"]

//console.log(students)

let students2 = [student, {id:2, name:"Halit"}, "Ankara", {city:"İstanbul"}]
//console.log(students2)

//...  (rest parameters) c# karşılığı params
//... ile verilen değerler birer arraydir.
let showProducts = function name(id, ...producsts) {
   console.log(id)
   console.log(producsts)
}

//console.log(typeof showProducts)  typeof son aldığı değerin türünün ne olduğunu verir

//showProducts(10,"Elma","Armut","Karpuz")

//spread (ayrıştırma). rest parametre array olduğu için spread kullanımı array olarak gelen veriyi rest parametreye gönderirken arrayden çıkartarak ayırmayı sağlar. 
let points = [1,2,3,4,50,6,60,14]
console.log(...points)
console.log(Math.max(...points))

console.log(..."ABC", "D", ..."EFG","H")

//Destructring
//Eldeki arrayin değerlerinin değişkenlere atanması

let populations = [10000,20000,30000,[40000,100000]]
let [small, medium, high, [veryHigh,maximum]] = populations //Destructring tanımı

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)
//fonksiyon destruct etme
function someFunctions ([small1],number) {
   console.log(small1)
}

someFunctions(populations)

//object destruct etme

let category = {id:1, name: "İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)


