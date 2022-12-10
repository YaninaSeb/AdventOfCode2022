        // PART 1

let headPosX = 0;
let headPosY = 4;

let tailPosX = 0;
let tailPosY = 4;

let arrTailSteps = [];
arrTailSteps.push(`${tailPosY}:${tailPosX}`);

function findVisitedPosition(data) {
    let arrSteps = data.split('\n');

    for (let s = 0; s < arrSteps.length; s++) {
        let [direction, countStep] = arrSteps[s].split(' ')

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

    return new Set(arrTailSteps).size
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
    if ((tailPosY - headPosY) == 2 && tailPosX == headPosX) {
        tailPosY = headPosY + 1;
        arrTailSteps.push(`${tailPosY}:${tailPosX}`);
    } else if ((tailPosY - headPosY) == 2 && tailPosX !== headPosX){
        tailPosY -= 1;
        tailPosX = headPosX;
        arrTailSteps.push(`${tailPosY}:${tailPosX}`);
    }
}

function setTailDownStep() {
    if ((headPosY - tailPosY) == 2 && tailPosX == headPosX) {
        tailPosY += 1;
        arrTailSteps.push(`${tailPosY}:${tailPosX}`);
    } else if (Math.abs(headPosY - tailPosY) == 2 && tailPosX !== headPosX){
        tailPosY += 1;
        tailPosX = headPosX;
        arrTailSteps.push(`${tailPosY}:${tailPosX}`);
    }
}

function setTailLeftStep() {
    if ((tailPosX - headPosX) == 2 && tailPosY == headPosY) {
        tailPosX = headPosX + 1;
        arrTailSteps.push(`${tailPosY}:${tailPosX}`);
    } else if ((tailPosX - headPosX) == 2 && tailPosY !== headPosY){
        tailPosX -= 1;
        tailPosY = headPosY;
        arrTailSteps.push(`${tailPosY}:${tailPosX}`);
    }
}

function setTailRightStep() {
    if ((headPosX - tailPosX) == 2 && tailPosY == headPosY) {
        tailPosX = headPosX - 1;
        arrTailSteps.push(`${tailPosY}:${tailPosX}`);
    } else if ((headPosX - tailPosX) == 2 && tailPosY !== headPosY){
        tailPosX += 1;
        tailPosY = headPosY;
        arrTailSteps.push(`${tailPosY}:${tailPosX}`);
    }
}
