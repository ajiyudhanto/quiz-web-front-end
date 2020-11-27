import axios from 'axios'

function setQuestions (payload) {
    return {
        type: 'SET_QUESTIONS',
        payload
    }
}

function addCorrect () {
    return {
        type: 'ADD_CORRECT'
    }
}

function resetCorrect () {
    return {
        type: 'RESET_CORRECT'
    }
}

export function getQuestions () {
    return (dispatch) => {
        axios.get('http://localhost:3000/all')
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
    }
}