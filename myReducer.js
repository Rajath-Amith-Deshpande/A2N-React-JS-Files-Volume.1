import InitialVal from './InitialVal'

const myReducer = (state=InitialVal,action) => {
    switch(action.type) {
        case 'NAME':
            state = {
                ...state,
                name:action.payload
            }

            case 'LOC':
                state = {
                    ...state,
                    loc:action.payload
                }
    }
} 

export default myReducer;