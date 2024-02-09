//1
import filterExcludedItems from './lesson-5-function'

let blockedEmails = ["spammer@example.com",  "banned@spammingwebsite.org"]
let allEmails = ["info@company.com","ajffw@gmail.com", "spammer@example.com", "support@website.org", "banned@spammingwebsite.org", "admin@adminpanel.org"]

let result1 = emailFilterExcludedItems(allEmails, blockedEmails);
console.log (result1)



//2
import calculation from './lesson-5-function'

let cartAmount = 1000;
let numberOfProducts = 5;
let promocode = 'ДАРИМ300';

let result2 = calculation(cartAmount, numberOfProducts, promocode);
console.log(result2);