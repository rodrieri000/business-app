import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listings from "./containers/Listings"
import Details from "./containers/Details"
import Login from "./containers/Login"
import AddListing from "./containers/AddListing"


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth() === true
            ? <Component {...props}/>
            : <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        }
        />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listings} />
            <Route exact path="/listing/:id" component={Details} />
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/addlisting" component={AddListing} />
        </Switch>
    );
};

export default Router;