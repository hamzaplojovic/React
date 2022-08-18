import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function User() {
    const location = useLocation();
    const navigation = useNavigate();

    useEffect(() => {
        const redirectToUsers = () => {
            navigation("/users");
        };
        if (location.state === null) {
            redirectToUsers();
        }
    }, [location.state, navigation]);
    {
        location.state && (
            <div>
                <p>{location.state.name}</p>
            </div>
        );
    }
}

export default User;
