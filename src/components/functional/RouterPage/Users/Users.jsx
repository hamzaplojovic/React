import React from "react";

const users = [{ name: "Hamza" }, { name: "Bob" }, { name: "Ken" }];

function Users() {
    return (
        <div>
            {users.map((user) => {
                return (
                    <div>
                        <h1>{user.name}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default Users;
