/**
 * Created by bcuser on 6/13/17.
 */
/**
 * Created by charlie on 6/3/17.
 */

const gistState = {
    youRang: {
        result: 'result default',
        message: 'message default'
    }
};

const gistReducer = (state = gistState, action) => {
    switch (action.type) {
        case 'YOU-RANG':
            return Object.assign({}, state, {youRang: action.youRang});
        default:
            return state;
    }
};

export default gistReducer;

