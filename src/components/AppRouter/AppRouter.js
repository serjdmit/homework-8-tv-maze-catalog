// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from '../Search';
import ShowPage from '../ShowPage';
import './AppRouter.css';

class AppRouter extends PureComponent {

    render(){

        return (
            <>
                <div className="App">
                    <Switch>
                        <Route path="/shows/:id" component={ShowPage} />
                        <Route component={Search} />
                    </Switch>
                </div>
            </>
        );
    }
};

export default AppRouter;