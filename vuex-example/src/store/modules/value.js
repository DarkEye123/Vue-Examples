const state = {
    value: 0
};

const getters = {
    value: state => {
        return state.value;
    }
};

const mutations = {
    value: (state, payload) => {
        state.value = payload;
    }
};

const actions = {
    value: ({
        commit
    }, payload) => {
        commit("value", payload);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};