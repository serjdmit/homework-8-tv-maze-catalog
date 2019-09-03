import { searchRequest, searchSuccess, searchFailure } from './actions';
import { handleActions } from 'redux-actions';

const search = handleActions({
    [searchRequest]: () => true,
    [searchSuccess]: () => false,
    [searchFailure]: () => false
}, false);

export default search;