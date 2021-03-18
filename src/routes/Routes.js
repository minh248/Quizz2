import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {landing, item, quizz, check} from "./index"

import Page404 from "../pages/errorPage/Page404";

import BlankLayout from "../layouts/BlankLayout";

const childRoutes = (Layout, routes) =>
    routes.map(({ children, path, component: Component }) =>
        children ? (
            // Route item with children
            children.map(({ path, component: Component }) => (
                <Route
                    path={path}
                    exact
                    render={props => (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    )}
                />
            ))
        ) : (
            // Route item without children
            <Route
                path={path}
                exact
                render={props => (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )}
            />
        )
    );

const Routes = () => (
    <Router>
        <Switch>
            {childRoutes(BlankLayout, landing)}
            {childRoutes(BlankLayout, item)}
            {childRoutes(BlankLayout, quizz)}
            {childRoutes(BlankLayout, check)}
            <Route
                render={() => (
                    <Page404 />
                )}
            />
        </Switch>
    </Router>
);

export default Routes;
