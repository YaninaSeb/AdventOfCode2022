            // PART 2

let numCycle = 0;
let registerValue = 1;

let spritePosition = '###';
let currentCRTRow = '';
let completedCRTRow = '';

function drawCRT(data) {
    let arrCPU = data.split('\n');

    arrCPU.forEach((cpu) => {
        let [instruction, value] = cpu.split(' ');

        if (instruction == 'noop') {
            drawSprite(0, 1);
        } else {
            drawSprite(value, 2);
        }
    });

    return completedCRTRow;
}

function drawSprite(value, count) {
    for (let n = 0; n < count; n++) {
        if (spritePosition[numCycle] == '#') {
            currentCRTRow += '#';
        } else {
            currentCRTRow += '.';
        }

        numCycle += 1;
        checkNumCycle();
    }

    if (value !== 0) {
        registerValue += +value;
        setSpritePosition(registerValue);
    }
}

function setSpritePosition(middleInd) {
    spritePosition = '';

    for (let i = 0; i < 40; i++) {
        let neededInd = [middleInd - 1, middleInd, middleInd + 1];

        if (neededInd.includes(i)) {
            spritePosition += '#';
        } else {
            spritePosition += '.';
        }
    }
}

function checkNumCycle() {
    if (numCycle == 40) {
        numCycle = 0;
        completedCRTRow += currentCRTRow + '\n';
        currentCRTRow = '';
    }
}
