const example = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`


// PART 1

let headPosX = 0;
let headPosY = 4;

let tailPosX = 0;
let tailPosY = 4;

let arrTailSteps = new Array(9).fill('0').map(() => [4, 0]);

function findVisitedPosition(data) {
    let arrSteps = data.split('\n');

    for (let s = 0; s < arrSteps.length; s++) {
        let [direction, countStep] = arrSteps[s].split(' ');

        switch(direction) {
            case 'U': {
                setStepUp(countStep);
                break;
            }
            case 'D': {
                setStepDown(countStep);
                break;
            }
            case 'L': {
                setStepLeft(countStep);
                break;
            }
            case 'R': {
                setStepRight(countStep);
                break;
            }
        }
    }

    //return arrTailSteps;
}

function setStepUp(count) {
    for (let n = 1; n <= count; n++) {
        headPosY -= 1;
        setTailUpStep();
    }
}

function setStepDown(count) {
    for (let n = 1; n <= count; n++) {
        headPosY += 1;
        setTailDownStep();
    }
}

function setStepLeft(count) {
    for (let n = 1; n <= count; n++) {
        headPosX -= 1;
        setTailLeftStep();
    }
}

function setStepRight(count) {
    for (let n = 1; n <= count; n++) {
        headPosX += 1;
        setTailRightStep();
    }
}

function setTailUpStep() {
    if ((arrTailSteps[0][0] - headPosY) == 2 && arrTailSteps[0][1] == headPosX) {
        arrTailSteps[0] = [headPosY - 1, headPosX];

    } else if ((tailPosY - headPosY) == 2 && tailPosX !== headPosX){
        tailPosY -= 1;
        tailPosX = headPosX;
        arrTailSteps.push(`${tailPosY}:${tailPosX}`);
    }
}

// function setTailDownStep() {
//     if ((headPosY - tailPosY) == 2 && tailPosX == headPosX) {
//         tailPosY += 1;
//         arrTailSteps.push(`${tailPosY}:${tailPosX}`);
//     } else if (Math.abs(headPosY - tailPosY) == 2 && tailPosX !== headPosX){
//         tailPosY += 1;
//         tailPosX = headPosX;
//         arrTailSteps.push(`${tailPosY}:${tailPosX}`);
//     }
// }

// function setTailLeftStep() {
//     if ((tailPosX - headPosX) > 1 && tailPosY == headPosY) {
//         tailPosX = headPosX + 1;
//         arrTailSteps.push(`${headPosY}:${headPosX-1}`);
//     } else if ((tailPosX - headPosX) > 1 && tailPosY !== headPosY){
//         tailPosX -= 1;
//         tailPosY = headPosY;
//         arrTailSteps.push(`${tailPosY}:${tailPosX}`);
//     }
//     console.log('right', arrTailSteps)
// }

function setTailRightStep() {
    if ((headPosX - arrTailSteps[0][1]) == 2 && arrTailSteps[0][0] == headPosY) {
        arrTailSteps.unshift([headPosY, headPosX - 1])
    } 
    // else if ((headPosX - tailPosX) > 1 && tailPosY !== headPosY){
    //     tailPosX += 1;
    //     tailPosY = headPosY;
    //     arrTailSteps.push(`${tailPosY}:${tailPosX}`);
    // }
    console.log(arrTailSteps);
}

const ex = `R 4`

console.log(findVisitedPosition(ex))
