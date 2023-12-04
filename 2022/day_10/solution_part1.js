            // PART 1

let numCycle = 0;
let registerValue = 1;
let sumSignalStrengths = 0;

function getSumSignalStrengths(data) {
    let arrCPU = data.split('\n');

    arrCPU.forEach((cpu) => {
        let [instruction, value] = cpu.split(' ');

        if (instruction == 'noop') {
            setADDCycles(0, 1);
        } else {
            setADDCycles(value, 2);
        }
    });

    return sumSignalStrengths;
}

function setADDCycles(value, count) {
    for (let n = 0; n < count; n++) {
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
