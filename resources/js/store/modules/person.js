import router from '../../router';
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
        axios.get(`/api/getPerson/${id}`).then(res =>{
            commit('setPerson', res.data.data);
        })
    },
    addPerson({},data){
        axios.post("/api/adauga", {name:data.name, job:data.job, age:data.age}).then(res =>{
            router.push({name:'ViewAll'});
        })
    },
    editPerson({},data){
        axios.post(`/api/editPerson/${data.id}`,
            {name:data.name, job:data.job, age:data.age}).then(res =>{
            router.push({name:'ViewAll'});

        })
    },
    selectAll({commit}){
        axios.get('/api/all').then(res => {
            commit('setPeople', res.data.data);
        })
    },
    deletePerson({dispatch},id){
        axios.delete(`/api/delete/${id}`).then(res =>{
            dispatch('selectAll');
        })
    }

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
