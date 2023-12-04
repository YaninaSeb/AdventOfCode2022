let m0 = [52, 60, 85, 69, 75, 75];
let m1 = [96, 82, 61, 99, 82, 84, 85];
let m2 = [95, 79];
let m3 = [88, 50, 82, 65, 77];
let m4 = [66, 90, 59, 90, 87, 63, 53, 88];
let m5 = [92, 75, 62];
let m6 = [94, 86, 76, 67];
let m7 = [57];

let arrMonkey = [m0, m1, m2, m3, m4, m5, m6, m7];

let arrTest = [[13, 6, 7], 
    [7, 0, 7],
    [19, 5, 3], 
    [2, 4, 1],
    [5, 1, 0],
    [3, 3, 4],
    [11, 5, 2],
    [17, 6, 2]
];

let arrInspectedItem = new Array(8).fill(0);


function getLevelOfMonkeyBusiness() {
    for (let n = 1; n < 21; n++) {
        for (let m = 0; m < arrMonkey.length; m++) {
            while (arrMonkey[m].length > 0) {
                testForMonkey(m);
            }
        }
    }

    let sortInspectedItem = arrInspectedItem.sort((a,b) => b-a);
    let levelOfMonkeyBusiness = sortInspectedItem[0] * sortInspectedItem[1];

    return levelOfMonkeyBusiness;
}

function testForMonkey (indMonkey) {
    let newOperation = getOperation(indMonkey); 
    
    let divider = arrTest[indMonkey][0];
    let indForTrue = arrTest[indMonkey][1];
    let indForFalse = arrTest[indMonkey][2];

    if (newOperation % divider == 0) {
        arrMonkey[indForTrue].push(newOperation);
    } else {
        arrMonkey[indForFalse].push(newOperation);
    }
    arrMonkey[indMonkey] = arrMonkey[indMonkey].slice(1);

    arrInspectedItem[indMonkey] += 1;
}

function getOperation(ind) {
    let oldValue = arrMonkey[ind][0];
    if (ind == 0) return Math.floor((oldValue * 17) / 3);
    if (ind == 1) return Math.floor((oldValue + 8) / 3);
    if (ind == 2) return Math.floor((oldValue + 6) / 3);
    if (ind == 3) return Math.floor((oldValue * 19) / 3);
    if (ind == 4) return Math.floor((oldValue + 7) / 3);
    if (ind == 5) return Math.floor((oldValue * oldValue) / 3);
    if (ind == 6) return Math.floor((oldValue + 1) / 3);
    if (ind == 7) return Math.floor((oldValue + 2) / 3);
}


console.log(getLevelOfMonkeyBusiness())