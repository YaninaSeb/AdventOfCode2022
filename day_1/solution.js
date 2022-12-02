         //PART 1

function findMax(data) {
    let arr = data.trim().split('\n\n');
    let arrKkal = arr.map((item) => {
        return item.split('\n').reduce((acc, curr) => acc += Number(curr), 0)
    });

    return Math.max(...arrKkal);
}


        //PART 2

function findThreeMax(data) {
    let arr = data.trim().split('\n\n');
    let arrKkal = arr.map((item) => {
        return item.split('\n').reduce((acc, curr) => acc += Number(curr), 0)
    });

    let res = 0;

    for (let i = 1; i < 4; i++) {
        let max = Math.max(...arrKkal);
        let ind = arrKkal.indexOf(max);
        res += max;
        arrKkal.splice(ind, 1);
    }

    return res;
}
