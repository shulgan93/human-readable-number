module.exports = function toReadable(number) {
    const data = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    let arr = [];

    if (data.hasOwnProperty(number)) {
        return data[number];
    }

    let hundred = Math.floor(number / 100);
    let ten = number % 100;
    let num = number % 10;

    if (hundred) {
        arr.push(data[hundred] + " hundred");
    }

    if (data[ten] && ten >= 10) {
        arr.push(data[ten]);
        return arr.join(" ");
    } else if (!data[ten]) {
        let n = Math.floor(ten / 10) * 10;
        arr.push(data[n]);
    }

    if (num) {
        arr.push(data[num]);
    }

    return arr.join(" ");
};
