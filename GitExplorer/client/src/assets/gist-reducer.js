/**
 * Created by bcuser on 6/13/17.
 */
/**
 * Created by charlie on 6/3/17.
 */

const gistState = {
    numbers: {
        nine: '0',
        eight: '0'
    }
};

const gistReducer = (state = gistState, action) => {
    switch (action.type) {
        case 'NUMBER_NINE':
            return Object.assign({}, state, {
                numbers: {
                    nine: 9,
                    eight: state.numbers.eight
                }
            });
        case 'NUMBER_EIGHT':
            return Object.assign({}, state, {
                numbers: {
                    nine: state.numbers.nine,
                    eight: 8
                }
            });
        default:
            return state;
    }
};

export default gistReducer;

