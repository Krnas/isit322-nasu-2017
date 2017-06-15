const gistState = {
    numbers: {
        nine: '0',
        eight: '0'
    },
    getFoo: {
        foo: 'foo',
        file: 'api.js'
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

        case 'GETFOO':
                    return Object.assign({}, state, {getFoo: action.getFoo});
                    etc

    }
    };

export default gistReducer;
