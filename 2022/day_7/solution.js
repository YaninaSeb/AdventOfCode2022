            // PART 1

function fileSystem(data) {
    let arr = data.trim().split('\n');

    let files = {};

    let currentPath = files;
    let arrPath = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].slice(0,4) === '$ cd') {
            let dir = arr[i].slice(5).trim();

            switch(dir) {
                case '/': {
                    currentPath = files;
                    arrPath = [];
                    break;
                };
                case '..': {
                    arrPath.pop();
                    currentPath = files;

                    arrPath.forEach((path) => currentPath = currentPath[path]);
                    break;
                }
                default: {
                    currentPath = currentPath[dir];
                    arrPath.push(`${dir}`);
                }
            }

        } else if (arr[i].slice(0,3) === 'dir') {

            let nameDir = arr[i].slice(4).trim();

            currentPath = files;

            arrPath.forEach((path) => currentPath = currentPath[path]);

            if (!currentPath.hasOwnProperty(nameDir)) {
                currentPath[nameDir] = {}
            }

        } else if (arr[i][0] !== '$') {

            let oneFileSize = arr[i].split(' ')[0];

            if (!currentPath['size']) {
                currentPath['size'] = +oneFileSize;
            } else {
                currentPath['size'] += +oneFileSize;
            }
        }

    }

    return files;
}


function getSizeAllDirectories() {
    let objFiles = {
        root: {...fileSystem(input)}
    };

    let directoriesSize = {};
    let randomNum = 1;

    function getSum(obj) {
        let sum = 0;

        for(let prop in obj) {
            if (typeof obj[prop] === 'object') {
                sum += getSum(obj[prop]);
            } 
            if (prop == 'size') {
                sum += obj[prop];
            }
        }

        directoriesSize[`${randomNum}`] = sum;
        randomNum++;

        return sum
    }

    getSum(objFiles);

    return directoriesSize
}


function getSumDirectories() {
    let directoriesSize = getSizeAllDirectories();
    let sum = 0;

    for(let dir in directoriesSize) {
        if (directoriesSize[dir] <= 100000) sum += directoriesSize[dir]
    }

    return sum
}


            //PART 2

function getMinDirectories() {
    let directoriesSize = getSizeAllDirectories();
    let arrSizes = Object.values(directoriesSize);
    let arrSizesSort = arrSizes.sort((a,b) => a-b);

    let currUnusedSpace = 70000000 - Math.max(...arrSizes);
    let requiredSpace = 30000000 - currUnusedSpace;

    for (let i = 0; i < arrSizesSort.length; i++) {
        if (arrSizesSort[i] >= requiredSpace) {
            return arrSizesSort[i];
        }
    }
}
