// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
import React from 'react';
import Search from '../Search';
import './AppRouter.css';

const AppRouter = () => {
    return (
        <>
            <div className="App">
                <Search />
            </div>
        </>
    );
};

export default AppRouter;