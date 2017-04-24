'use strict';

const intRomanMap = 
    [
        {
            value: 1000,
            key: "M"
        },
        {
            value: 900,
            key: "CM"
        }, 
        { 
            value: 500,
            key: "D"
        },
        {
            value: 400,
            key: "CD"
        }, 
        {
            value: 100,
            key: "C"
        }, 
        {
            value: 90,
            key: "XC"
        }, 
        {
            value: 50,
            key: "L"
        }, 
        {
            value: 40,
            key: "XL"
        }, 
        {
            value: 10,
            key: "X"
        },
        {
            value: 9,
            key: "IX"
        },
        {
            value: 5,
            key: "V"
        },
        {
            value: 4,
            key: "IV"
        },
        {
            value: 1,
            key: "I"
        }
    ];

const romanValueMap = {};

for (let kvp of intRomanMap) {
    romanValueMap[kvp.key] = kvp.value;
}

const intToRoman = (number) => {
    let result = "";
    if (number > 0) {
        for (let kvp of intRomanMap) {
            while (kvp.value <= number) {
                result = result.concat(kvp.key);
                number -= kvp.value;
            }
        }
    }
    return result;
};

const romanToInt = (numerals) => {
    const individual = numerals.
        split('');
    let acc = 0;
    for (let i = 0; i < individual.length; i++) {
        const j = i + 1;
        const currentVal = romanValueMap[individual[i]];
        if (j < individual.length) {
            const nextVal = romanValueMap[individual[j]];
            if (currentVal < nextVal) {
                acc += (nextVal - currentVal);
                i++;
            } else {
                acc += currentVal;
            }
        } else {
            acc += currentVal;
        }
    }
    return acc;
};
console.log(intToRoman(1954));
console.log(romanToInt('MCMLIV'));