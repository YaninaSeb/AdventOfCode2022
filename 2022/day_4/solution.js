                // PART 1

function countOneContainOther(data) {
    let arr = data.trim().split('\n');
    let count = 0;

    arr.forEach((line) => {
        let [firstPart, secondPart] = line.split(',');

        let [oneInFirst, twoInFirst] = firstPart.split('-');
        let [oneInSecond, twoInSecond] = secondPart.split('-');

        if (+oneInFirst >= +oneInSecond && +twoInFirst <= +twoInSecond) {
            count++;
        } else if (+oneInFirst <= +oneInSecond && +twoInFirst >= +twoInSecond) {
            count++;
        }
    });

    return count;
}


               // PART 2

function countOneOverlapOther(data) {
    let arr = data.trim().split('\n');
    let count = 0;

    arr.forEach((line) => {
        let [firstPart, secondPart] = line.split(',');

        let [oneInFirst, twoInFirst] = firstPart.split('-');
        let [oneInSecond, twoInSecond] = secondPart.split('-');

        if (+oneInFirst >= +oneInSecond && +oneInFirst <= +twoInSecond ||
            +twoInFirst >= +oneInSecond && +twoInFirst <= +twoInSecond) {
            count++;
        } else if (+oneInSecond >= +oneInFirst && +oneInSecond <= +twoInFirst ||
                   +twoInSecond >= +oneInFirst && +twoInSecond <= +twoInFirst) {
            count++;
        }
    });

    return count;
}
