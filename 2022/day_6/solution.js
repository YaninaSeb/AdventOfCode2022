
        // PART 1

function findFirstMarker(data) {
    let position = 0;

    for (let i = 0; i <= (data.length - 4); i++) {
        let str = data.slice(i, i + 4);
        let uniqueStr = new Set(str);

        if (uniqueStr.size === 4) {
            position = i + 4;
            break;
        }
    }

    return position
}


        // PART 2

function findFirstMarkerPart2(data) {
    let position = 0;

    for (let i = 0; i <= (data.length - 14); i++) {
        let str = data.slice(i, i + 14);
        let uniqueStr = new Set(str);

        if (uniqueStr.size === 14) {
            position = i + 14;
            break;
        }
    }

    return position
}
