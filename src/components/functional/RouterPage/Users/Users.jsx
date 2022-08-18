import React from "react";
import { useNavigate } from "react-router-dom";
import "./Users.scss";

const users = [
    { name: "Hamza", surname: "Plojovic", job: "developer" },
    { name: "Bob", surname: "dnlsdsd", job: "developer" },
    { name: "Ken", suername: "dskad", job: "developer" },
];

function Users() {
    const navigation = useNavigate();
    const navigateToUser = (user) => {
        navigation("/user", { state: user });
    };

    return (
        <div>
            {users.map((user) => {
                return (
                    <div className="card">
                        <h1>{user.name}</h1>
                        <h1>{user.surname}</h1>
                        <h1>{user.job}</h1>
                        <button onClick={navigateToUser}>See more</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Users;
