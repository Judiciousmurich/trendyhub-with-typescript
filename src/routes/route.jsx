import {createBrowserRouter,createRoutesFromElements,Route} from "react-router-dom"
export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="" element ={<UserLayout/>}>
        </Route>
    )
)