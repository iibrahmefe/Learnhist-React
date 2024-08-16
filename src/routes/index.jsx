import Login from "../pages/login";
import SignUp from "../pages/signup";

const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <SignUp />
    }
])

export default routes;