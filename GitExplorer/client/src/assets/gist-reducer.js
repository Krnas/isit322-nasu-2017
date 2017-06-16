/**
 * Created by bcuser on 6/13/17.
 */
const gistState = {
    youRang: {
        result: 'result default',
        message: 'message default'
    },
    numbers: {
        nine: 0,
        eight: 0
    }
};

const gistReducer = (state = gistState, action) => {
    switch (action.type) {
        case 'YOU-RANG':
            return Object.assign({}, state, {youRang: action.youRang});
        case 'NUMBER_EIGHT':
            return Object.assign({}, state, {
                numbers : {
                    eight: 8,
                    nine: state.numbers.nine
                }

                //numbers.nine: state.numbers.nine
            });
        default:
            return state;
    }
};

export default gistReducer;