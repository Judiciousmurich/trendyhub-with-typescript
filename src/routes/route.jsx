import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Routes,
  } from "react-router-dom";
  
export const router = createBrowserRouter(
    createRoutesFromElements(
      <Routes>
        <Route path="" element={<UserLayout />} />
      </Routes>
    )
  );
  