const removeFromArray = function(array,...items) {
    for (let i = 0; i < items.length; i++){
        array.filter(function(value,index,arr) {
            if (value===items[i]) {
                arr.splice(index,1);
            }
        })
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
