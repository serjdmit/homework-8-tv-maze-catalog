import { searchSuccess } from './actions';
import { handleActions } from 'redux-actions';

const shows = handleActions({
    [searchSuccess]: () => [],
    [searchSuccess]: (_state, action) => action.payload
}, []);

export default shows;

