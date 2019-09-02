// Реализуйте showMiddleware

// Вам необходимо обработать showRequest
// После получения данных с сервера - диспачте showSuccess
// В случае ошибки showSuccess

// На забудьте вызвать метод next.

export const showMiddleware = store => next => action => {
    console.log(action);

    console.log(store.getState());

    console.log('asdasd');
    return next(action);
};
