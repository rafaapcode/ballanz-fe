import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "../view/Layouts/AuthLayout";
import Dashboard from "../view/pages/Dashboard";
import Login from "../view/pages/Login";
import Register from "../view/pages/Register";
import AuthGuard from "./AuthGuard";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthGuard />}>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>

        <Route element={<AuthGuard isPrivate />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
