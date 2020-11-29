
export default function useShuffler (question) {
    let shuffledOptions = []
    let options = []
    options.push([question.false_option_1, 'false'])
    options.push([question.false_option_2, 'false'])
    options.push([question.correct_option_1, 'correct'])
    if (question.type === 'MCSAQ') {
        options.push([question.false_option_3, 'false'])
    } else {
        options.push([question.correct_option_2, 'correct'])
    }
    for (let i = 0; i < 4; i++) {
        const index = Math.floor(Math.random() * options.length)
        const chosenOption = options.splice(index, 1)
        shuffledOptions.push(chosenOption[0])
    }
    return shuffledOptions
}