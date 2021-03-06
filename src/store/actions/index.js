import axios from 'axios'

function setQuestions (payload) {
    return {
        type: 'SET_QUESTIONS',
        payload
    }
}

export function addCorrect () {
    return {
        type: 'ADD_CORRECT'
    }
}

export function resetCorrect () {
    return {
        type: 'RESET_CORRECT'
    }
}

export function setPlayerName (payload) {
    return {
        type: 'SET_PLAYER_NAME',
        payload
    }
}

export function setQuestionsIndex (payload) {
    return {
        type: 'SET_QUESTIONS_INDEX',
        payload
    }
}

export function switchIsAnswered () {
    return {
        type: 'SWITCH_IS_ANSWERED'
    }
}

export function getQuestions () {
    return (dispatch) => {
        axios.get('https://tebak-katakota.herokuapp.com/all')
        .then(res => {
            console.log(res.data.questions)
            dispatch(setQuestions(res.data.questions))
        })
        .catch(err => {
            console.log(err)
        })
    }
}