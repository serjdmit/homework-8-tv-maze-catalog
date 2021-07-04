// Реализуйте searchMiddleware
// Обратите внимание на файл `searchMiddleware.test.js`

// Вам необходимо обработать searchRequest
// После получения данных с сервера - диспачте searchSuccess
// В случае ошибки searchFailure

// На забудьте вызвать метод next.
import { searchRequest, searchSuccess, searchFailure } from '../reducers/actions';
import { search } from '../api';

export const searchMiddleware = store => next => action => {
    if (action.type === searchRequest.toString()) {
        search(action.payload)
            .then(
                data => {
                    store.dispatch(searchSuccess(data));
                }
            )
            .catch(
                error => {
                    store.dispatch(searchFailure(error));
                }
            );
    }
    // console.log(store);
    next(action);
};