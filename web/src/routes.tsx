import React from'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import landing from './pages/landing';
import orphanagesMap from './pages/orphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';


function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={landing} />
        <Route path="/app" component={orphanagesMap} />
        <Route path="/orphanages/create" component={CreateOrphanage} />
        <Route path="/orphanages/:id" component={Orphanage} />
        </Switch>
        </BrowserRouter>
    );
}
export default Routes;
