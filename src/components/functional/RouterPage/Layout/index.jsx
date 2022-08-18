import Nav from "../Nav";
import Footer from "../Footer/Footer";

const Layout = (props) => {
    return (
        <>
            <Nav />
            {props.children}
            <Footer />
        </>
    );
};
export default Layout;
