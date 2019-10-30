import React from 'react'
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import Profile from './Components/Profile/Profile'
import Browse from './Components/Browse/Browse'


import {Switch, Route} from 'react-router-dom'


export default (
<Switch>
    <Route exact path ='/' component={Auth} />
    <Route path ='/dashboard' component={Dashboard} />
    <Route path ='/profile' component={Profile} />
    <Route path ='/browse' component={Browse} />

</Switch>
)