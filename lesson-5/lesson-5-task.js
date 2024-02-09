//1
import filterExcludedItems from './lesson-5-function'

let blockedEmails = ["spammer@example.com",  "banned@spammingwebsite.org"]
let allEmails = ["info@company.com","ajffw@gmail.com", "spammer@example.com", "support@website.org", "banned@spammingwebsite.org", "admin@adminpanel.org"]

let result1 = emailFilterExcludedItems(allEmails, blockedEmails);
console.log (result1)



//2
function calculation(cartAmount, numberOfProducts, promocode){

    let finalSum = 0;
    if (promocode === 'ДАРИМ300') {
      finalSum = Math.round(cartAmount - 300)
    }
    if (numberOfProducts >= 10){
     finalSum = Math.round(cartAmount-(cartAmount * 0.05))
    }
    if (cartAmount > 50000) {
       finalSum = Math.round(cartAmount - ((cartAmount - 50000) * 0.2))
    }
    if (cartAmount >= 20000) {
     finalSum = Math.round(cartAmount-(cartAmount * 0.15))
    }
    return finalSum;
    }
    

let cartAmount = 1000;
let numberOfProducts = 5;
let promocode = 'ДАРИМ300';

let result2 = calculation(cartAmount, numberOfProducts, promocode);
console.log(result2);