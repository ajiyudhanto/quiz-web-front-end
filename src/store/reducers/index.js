const initialState = {
    questions: [],
    correct: 0,
    playerName: '',
    questionsIndex: 0
}

export default function reducer(state = initialState, action) {
    let newState = JSON.parse(JSON.stringify(state))
    if (action.type === 'SET_QUESTIONS') {
        newState.questions = action.payload
        return newState
    } else if (action.type === 'ADD_CORRECT') {
        newState.correct = newState.correct + 1
        return newState
    } else if (action.type === 'RESET_CORRECT') {
        newState.correct = 0
        return newState
    } else if (action.type === 'SET_PLAYER_NAME') {
        newState.playerName = action.payload
        return newState
    } else if (action.type === 'SET_QUESTIONS_INDEX') {
        newState.questionsIndex = action.payload
        return newState
    } else {
        return state
    }
}