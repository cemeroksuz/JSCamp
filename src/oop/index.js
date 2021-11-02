export class Customer { //export = public
    constructor(id, customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1,12345) 

//prototyping bir class a başka bir özellik ekleyebilme. 
customer.name ="Cem Eröksüz"
console.log(customer.name)
//Constructor içinde parametrenin nereye yerleştirileceğini belirtmek gerekir (rototyping tekniği ile)
console.log(customer.id)
console.log(customer.customerNumber)


Customer.bisey = "Bişey"
console.log(Customer.bisey)

class IndividualCustomer extends Customer{
    constructor(firtsName, id, customerNumber){
    super(id,customerNumber)
    this.firtsName = firtsName
    }
}


class CorporateCustomer extends Customer{
    constructor(companyName, id, customerNumber){
    super(id,customerNumber)
    this.companyName = companyName
    }
}

