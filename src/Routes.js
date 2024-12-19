import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";


const routes = [
    {
        path: "/",
        element: <HomePage />,
        isPrivate: false,
    },
    {
        path: "/about",
        element: <About />,
        isPrivate: false,
    },
    // {
    //     path: "/login",
    //     element: <Login />,
    //     isPrivate: false,
    // },
]


const AllRoutes = () => {
    return (
        <Router>
            <Routes>
                {routes.map(({ path, element }) => (
                    <Route path={path} element={element} key={path} />
                ))}
                <Route exact path="*" element={<Navigate to="/error/404" />} />
            </Routes>
        </Router>
    )
}

export default AllRoutes