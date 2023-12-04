        // PART 1

function countVisibleTrees(data) {
    let arr = data.split('\n');
    let countTreesOfAround = arr.length * 2 + arr[0].length * 2 - 4;
    let visibleTrees = countTreesOfAround;

    for (let l = 1; l < arr.length - 1; l++) {
        let line = arr[l];

        for (let ind = 1; ind < line.length - 1; ind++ ) {
            let isTopVisible = checkTopVisible(arr, l, ind);
            let isDownVisible = checkDownVisible(arr, l, ind);
            let isLeftVisible = checkLeftVisible(arr, l, ind);
            let isRightVisible = checkRightVisible(arr, l, ind);

            if (isTopVisible || isDownVisible || isLeftVisible || isRightVisible) {
                visibleTrees++;
            }
        }
    }

    return visibleTrees;
}

function checkTopVisible(arr, posY, posX) {
    let elem = arr[posY][posX];
    for (let i = (posY - 1); i >= 0; i--) {
        if (arr[i][posX] >= elem) return false
    }
    return true;
}

function checkDownVisible(arr, posY, posX) {
    let elem = arr[posY][posX];
    for (let i = (posY + 1); i < arr.length; i++) {
        if (arr[i][posX] >= elem) return false
    }
    return true;
}

function checkLeftVisible(arr, posY, posX) {
    let elem = arr[posY][posX];
    for (let i = (posX - 1); i >= 0; i--) {
        if (arr[posY][i] >= elem) return false
    }
    return true;
}

function checkRightVisible(arr, posY, posX) {
    let elem = arr[posY][posX];
    for (let i = (posX + 1); i < arr[0].length; i++) {
        if (arr[posY][i] >= elem) return false
    }
    return true;
}

            // PART 2

function findHighestTrees(data) {
    let arr = data.split('\n');
    let currentHighestTrees = 0;

    for (let l = 1; l < arr.length - 1; l++) {
        let line = arr[l];

        for (let ind = 1; ind < line.length - 1; ind++ ) {
            let topVisibleTree = getTopVisibleTrees(arr, l, ind);
            let downVisibleTree = getDownVisibleTrees(arr, l, ind);
            let leftVisibleTree = getLeftVisibleTrees(arr, l, ind);
            let rightVisibleTree = getRightVisibleTrees(arr, l, ind);

            let hight = topVisibleTree * downVisibleTree * leftVisibleTree * rightVisibleTree;

            if (hight > currentHighestTrees) currentHighestTrees = hight;
        }
    }

    return currentHighestTrees;
}

function getTopVisibleTrees(arr, posY, posX) {
    let elem = arr[posY][posX];
    let count = 0;
    for (let i = (posY - 1); i >= 0; i--) {
        count++;
        if (arr[i][posX] >= elem) return count;
    }
    return count;
}

function getDownVisibleTrees(arr, posY, posX) {
    let elem = arr[posY][posX];
    let count = 0;
    for (let i = (posY + 1); i < arr.length; i++) {
        count++;
        if (arr[i][posX] >= elem) return count
    }
    return count;
}

function getLeftVisibleTrees(arr, posY, posX) {
    let elem = arr[posY][posX];
    let count = 0;
    for (let i = (posX - 1); i >= 0; i--) {
        count++;
        if (arr[posY][i] >= elem) return count
    }
    return count;
}

function getRightVisibleTrees(arr, posY, posX) {
    let elem = arr[posY][posX];
    let count = 0;
    for (let i = (posX + 1); i < arr[0].length; i++) {
        count++;
        if (arr[posY][i] >= elem) return count
    }
    return count;
}
