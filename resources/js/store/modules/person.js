const state = { //de la data,
    person:null,
    people:null,
}

const getters = {
    person: state => {
        return state.person
    },
    people: state =>{
        return state.people
    }
}

const actions = { //de la methods

    getPerson({state, commit, dispatch}, id){
        console.log('111');
        axios.get(`/api/getEmployee/${id}`).then(res =>{
            commit('setPerson', res.data.data);
            console.log('2222');
        })
    },

}

const mutations = { //setterii
    setPerson(state, person){
        state.person = person;
    },
    setPeople(state, people){
        state.people = people;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
};
