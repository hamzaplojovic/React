import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contacts from "./Contacts";
import Home from "./Home";
import Page404 from "./Page404";
import Team from "./Team";
import Users from "./Users/Users";
import User from "./User/User";
import Product from "./Product/Product";
import Products from "./Products/Products";

const RouterPage = (props) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<Users />} />
                <Route path="/user" element={<User />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<Product />} />

                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
};
export default RouterPage;
