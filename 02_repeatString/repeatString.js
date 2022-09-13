const repeatString = function(Hi, times) {
    if (times < 0) return 'error';
    let string = '';
    for (let i = 0; i < times; i++) {
        string += Hi;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
