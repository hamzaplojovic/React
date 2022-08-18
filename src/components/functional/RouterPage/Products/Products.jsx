import React from "react";

function Products() {
    const products = [
        { name: "djsdsds", id: 1 },
        { name: "djsdsddssdsdsds", id: 2 },
        { name: "djsdsddssdsdsdsdsdsds", id: 3 },
        { name: "djsdsddssdsdsdsdsdsdsdsdsdsds", id: 4 },
    ];
    return (
        <div>
            {products.map((item) => {
                return (
                    <div className="card">
                        <h1>{item.name}</h1>
                        <h1>{item.id}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default Products;
