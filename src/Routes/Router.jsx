import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "/auth",
        element: <h1>Authentication Layout</h1>
    },
    {
        path: "/news",
        element: <h1>news Layout</h1>
    },
    {
        path: "/*",
        element: <h1>404</h1>
    },
])
export default router