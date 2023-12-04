let stack1 = ['G', 'D', 'V', 'Z', 'J', 'S', 'B'];
let stack2 = ['Z', 'S', 'M', 'G', 'V', 'P'];
let stack3 = ['C', 'L', 'B', 'S', 'W', 'T', 'Q', 'F'];
let stack4 = ['H', 'J', 'G', 'W', 'M', 'R', 'V', 'Q'];
let stack5 = ['C', 'L', 'S', 'N', 'F', 'M', 'D'];
let stack6 = ['R', 'G', 'C', 'D'];
let stack7 = ['H', 'G', 'T', 'R', 'J', 'D', 'S', 'Q'];
let stack8 = ['P', 'F', 'V'];
let stack9 = ['D', 'R', 'S', 'T', 'J'];

let stacks = [[], stack1, stack2, stack3, stack4, stack5, stack6, stack7, stack8, stack9]

        // PART 1

function moveFromTo(steps) {
    let arrSteps = steps.trim().split('\n');

    for (let s = 0; s < arrSteps.length; s++) {
        let [count, from, to] = arrSteps[s].split(' ').filter((elem) => Number(elem));

        for (let i = 1; i <= count; i++) {
            let box = stacks[from].pop();
            stacks[to].push(box);
        }
    }

    let res = stacks.map((oneStack) => oneStack.pop()).slice(1).join('');

    return res;
}


        // PART 2

function moveFromToPart2(steps) {
    let arrSteps = steps.trim().split('\n');

    for (let s = 0; s < arrSteps.length; s++) {
        let [count, from, to] = arrSteps[s].split(' ').filter((elem) => Number(elem));

        let boxes = [];

        for (let i = 1; i <= count; i++) {
            let box = stacks[from].pop();
            boxes.unshift(box);
        }

        stacks[to].push(...boxes);
    }

    let res = stacks.map((oneStack) => oneStack.pop()).slice(1).join('');

    return res;
}
