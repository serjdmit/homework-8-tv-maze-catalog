import { createStore } from 'redux';

const getStore = () => {
    const reducer = (previousState, action) => {
        console.log(action);
        return previousState;
    };
    const store = createStore(reducer, {});
    store.subscribe(() => {
        console.log('asdasd');
    });
    return store;
};

export default getStore;