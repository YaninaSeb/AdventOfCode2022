        // PART 1

function findTheSameSymbol(data) {
    let arr = data.trim().split('\n');
    let sum = 0;

    arr.forEach((item) => {
        let firstPart = item.slice(0, item.length/2);
        let secondPart = item.slice(item.length/2);

        for (let i = 0; i < firstPart.length; i++) {
            if (secondPart.includes(firstPart[i])) {
                let prioritize = getPrioritize(firstPart[i]);
                sum += prioritize;
                break;
            }
        }
    });

    return sum;
}

function getPrioritize(symbol) {
    let unicode = symbol.charCodeAt(0);

    if (unicode > 96 && unicode < 123) {
        return unicode - 96;
    } else {
        return unicode - 64 + 26;
    }
}


        // PART 2

function findGroupSymbol(data) {
    let arr = data.trim().split('\n');
    let sum = 0;

    for (let l = 0; l < arr.length; l += 3) { //проходимся по группам из трех строк
        let firstLine = arr[l];
        let secondLine = arr[l+1];
        let thirdLine = arr[l+2];

        for (let i = 0; i < firstLine.length; i++) { //проходимся по символам в каждой группе
            let symbol = firstLine[i];
            if (secondLine.includes(symbol) && thirdLine.includes(symbol)) {
                let prioritize = getPrioritize(symbol);
                sum += prioritize;
                break;
            }
        }
    }

    return sum;
}
