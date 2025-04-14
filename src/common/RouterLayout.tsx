import React from "react";
import { useAppSelector } from "../hooks/hooks";
import { Navigate } from "react-router-dom";

export const RouterLayout: React.FC<{}> = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return isAuthenticated ? (
        <>
            <span>HOME</span>
        </>
    ) : (
        <Navigate to="/login" />
    )
}