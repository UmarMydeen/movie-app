import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, isAuth, location, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => isAuth
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: location } }} />}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.login.isAuth,
    }
};

export { PrivateRoute as TestablePrivateRoute };

const hocChain = compose(
    connect(mapStateToProps, null),
);

export default hocChain(PrivateRoute);