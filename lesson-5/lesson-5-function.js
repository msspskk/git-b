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


