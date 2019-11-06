import React from 'react'
import Auth from './Components/Auth/Auth'
import Dashboard from './Components/Dashboard/Dashboard'
import Profile from './Components/Profile/Profile'
import Browse from './Components/Browse/Browse'
import AddRecipe1 from './Components/Recipe/AddRecipe1'
import AddRecipe2 from './Components/Recipe/AddRecipe2'
import UserRecipes from './Components/UserRecipes/UserRecipes'
import AddRecipe3 from './Components/Recipe/AddRecipe3'
import Recipe from './Components/Recipe/Recipe'


import {Switch, Route} from 'react-router-dom'


export default (
<Switch>
    <Route exact path ='/' component={Auth} />
    <Route path ='/dashboard' component={Dashboard} />
    <Route path ='/profile' component={Profile} />
    <Route path ='/browse' component={Browse} />
    <Route path ='/recipestep1' component={AddRecipe1} />
    <Route path ='/recipe-step-2' component={AddRecipe2} />
    <Route path ='/my-recipes' component={UserRecipes} />
    <Route path ='/recipe-step-3' component={AddRecipe3} />
    <Route path ='/add-recipe' component={Recipe} />
</Switch>
)