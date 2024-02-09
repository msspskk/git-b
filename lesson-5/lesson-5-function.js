//1
function filterExcludedItems(items, blacklist) {
    
   let includedItems  = []
    for (let item of items) {
     if (!blacklist.includes(item)) {
      includedItems.push(item) 
    }
}
return includedItems 
}

export default { filterExcludedItems };

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

export default { calculation };
