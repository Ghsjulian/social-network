import Layouts from "./layouts/Layouts";
import Home from "./components/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Protect from "./protect/Protect";
import MyContext from "./test/MyContext";
import UserProfile from "./pages/UserProfile";

const MyRoutes = [
    {
        path: "/",
        index: true,
        element: (
            <Protect>
                <Layouts>
                    <Home />
                </Layouts>
            </Protect>
        )
    },
    {
        path: "/profile/user/:id",
        element: (
            <Protect>
                <Layouts>
                    <UserProfile />
                </Layouts>
            </Protect>
        )
    },
    {
        path: "/test",
        element: <UserProfile />
    },
    {
        path: "/home",
        element: (
            <Protect>
                <Layouts>
                    <Home />
                </Layouts>
            </Protect>
        )
    },
    { path: "/signup", element: <Signup /> },
    { path: "/login", element: <Login /> }
];

export default MyRoutes;
