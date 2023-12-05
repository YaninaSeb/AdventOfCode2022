            //PART 1

function trebuchetPartOne(data) {
    let arr = data.trim().split('\n');

    let res = arr.reduce((acc, curr) => {
        let numStr = curr.replace(/[a-zA-Z]/gi, '');
        let num = numStr[0] + numStr[numStr.length-1];
        return acc + +num;
    }, 0);

    return res;
}

            // PART 2

function trebuchetPartTwo(data) {
    let arr = data.trim().split('\n');

    let res = arr.reduce((acc, curr) => {
        let str = changeNum(curr);

        console.log(str);
        // let numStr = curr.replace(/[a-zA-Z]/gi, '');
        // let num = numStr[0] + numStr[numStr.length-1];
        // return acc + +num;
    }, 0);

    return res;
}

function changeNum(str) {
    let nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    nums.forEach((num, ind) => {
        if (str.includes(num)) {
            str = str.replace(num, `${ind+1}`);
        }
    });

    return str;
}

const example = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`
