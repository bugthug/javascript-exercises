const sumAll = function(bottom, top) {
    console.log(typeof bottom);
    if (typeof bottom !== 'number' || typeof top !== 'number') {
        return 'ERROR';
    }

    if (bottom < 0 || top < 0) {
        return 'ERROR';
    }

    if (bottom > top) {
        let temp1 = bottom;
        bottom = top;
        top = temp1;
    }

    let sum = 0;

    for (let currentIndex = bottom; currentIndex <= top; currentIndex++) {
        sum += currentIndex;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
