import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";

function Product() {
    const params = useParams();
    const products = [
        { name: "djsdsds", id: 1 },
        { name: "djsdsddssdsdsds", id: 2 },
        { name: "djsdsddssdsdsdsdsdsds", id: 3 },
        { name: "djsdsddssdsdsdsdsdsdsdsdsdsds", id: 4 },
    ];
    console.log();
    return (
        <Layout>
            <div>
                <h1>{products[params.productId].name}</h1>
                <h1>{products[params.productId].id}</h1>
            </div>
        </Layout>
    );
}

export default Product;
