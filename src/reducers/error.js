import { searchRequest, searchFailure } from './actions';
import { handleActions } from 'redux-actions';

const error = handleActions({
    [searchRequest]: () => null,
    [searchFailure]: (_state, action) => action.payload
}, null);

export default error;