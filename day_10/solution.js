            // PART 1

let numCycle = 0;
let registerValue = 1;
let sumSignalStrengths = 0;

function getSumSignalStrengths(data) {
    let arrCPU = data.split('\n');

    arrCPU.forEach((cpu) => {
        let [instruction, value] = cpu.split(' ');
        
        switch (instruction) {
            case 'noop': {
                numCycle +=1;
                checkCycle();
                break;
            }
            case 'addx': {
                setADDCycles(value);
                break;
            }
        }
    });

    return sumSignalStrengths;
}

function setADDCycles(value) {
    for (let n = 1; n < 3; n++) {
        numCycle += 1;
        checkCycle();
    }
    registerValue += +value;
}

function checkCycle() {
    let neededSignals = [20, 60, 100, 140, 180, 220]
    if (neededSignals.includes(numCycle)) {
        let signalStrengths = numCycle * registerValue;
        sumSignalStrengths += signalStrengths;
    }
}


console.log(getSumSignalStrengths(input))