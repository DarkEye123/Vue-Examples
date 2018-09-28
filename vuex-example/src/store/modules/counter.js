const state = {
    counter: 0
};
const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + ' Clicks';
    }
};

const mutations = {
    increment: state => {
        state.counter++;
    },
    decrement: state => {
        if (state.counter > 0)
            state.counter--;
    }
};

const actions = {
    increment: ({
        commit
    }) => { //context is comming here {commit} is es6 way of doing context.commit()
        commit("increment");
    },
    decrement: ({
        commit
    }) => {
        commit("decrement");
    },
    incrementAsync: ({
        commit
    }) => { //context is comming here {commit} is es6 way of doing context.commit()
        setTimeout(() => commit("increment"), 1000);
    },
    decrementAsync: ({
        commit
    }) => {
        setTimeout(() => commit("decrement"), 1000);
    }
};

export default {
    state,
    mutations,
    getters,
    actions
};