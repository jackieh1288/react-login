const initState = {
    goal: 'Jackie',
    message: ''
}

const reducer = (state = initState, action) => {
    switch (action.type){
        case "LOGIN_REQUEST":
            return {
                ...state,
                message: "login request"
            }
        case "LOGIN_SUCCESS": 
            return {
                ...state,
                message: "login success"
            }
        case "LOGIN_FAILED":
            return {
                ...state,
                message: "login failed"
            }
        default:
            return state
    }
}

export default reducer