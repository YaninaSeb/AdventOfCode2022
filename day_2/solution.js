        // PART 1

function findTotalScore(data) {
    let round = {
        'A X': 4, 'A Y': 8, 'A Z': 3,
        'B X': 1, 'B Y': 5, 'B Z': 9,
        'C X': 7, 'C Y': 2, 'C Z': 6
    }

    let arrRounds = data.trim().split('\n')
    let score = arrRounds.reduce((acc, curr) => {
        let scoreOneRound = round[curr];
        return acc += scoreOneRound;
    },0)

    return score
}


        // PART 2

function findTotalScorePart2(data) {
    let round = {
        'A X': 3, 'A Y': 4, 'A Z': 8,
        'B X': 1, 'B Y': 5, 'B Z': 9,
        'C X': 2, 'C Y': 6, 'C Z': 7
    }

    let arrRounds = data.trim().split('\n')
    let score = arrRounds.reduce((acc, curr) => {
        let scoreOneRound = round[curr];
        return acc += scoreOneRound;
    },0)

    return score
}
