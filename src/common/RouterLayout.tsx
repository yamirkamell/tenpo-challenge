import React from "react";
import { useAppSelector } from "../hooks/hooks";
import { Navigate, Outlet } from "react-router-dom";

export const RouterLayout: React.FC<{}> = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return isAuthenticated ? (
        <>
            <Outlet />
        </>
    ) : (
        <Navigate to="/login" />
    )
}