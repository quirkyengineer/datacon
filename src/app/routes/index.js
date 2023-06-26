import React from "react";
import Home from "../pages/home";
import Page from "@jumbo/shared/Page";
import UserProfile from "app/pages/users/user-profile/UserProfile";
import WallApp from "app/pages/users/wall-app/WallApp";

/**
 routes which you want to make accessible to both authenticated and anonymous users
 **/
const routesForPublic = [
    {
        path: "/",
        element: <Page component={Home} />
    },
    {
        path: "/user/profile",
        element: <Page component={UserProfile}/>
    },
    {
        path: "/user/social-wall",
        element: <Page component={WallApp}/>
    }
];

/**
 routes only accessible to authenticated users
 **/
const routesForAuthenticatedOnly = [];

/**
 routes only accessible when user is anonymous
 **/
const routesForNotAuthenticatedOnly = [];


const routes = [
    ...routesForPublic,
    ...routesForAuthenticatedOnly,
    ...routesForNotAuthenticatedOnly,
];

export {routes as default, routesForPublic, routesForNotAuthenticatedOnly, routesForAuthenticatedOnly};