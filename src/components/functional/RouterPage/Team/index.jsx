import Layout from "../Layout";
import "./Team.scss";
import { AiOutlineUser } from "@react-icons/all-files/ai/AiOutlineUser";

const Team = () => {
    return (
        <Layout>
            <div className="team">
                <div className="card">
                    <div className="iconDiv">
                        <AiOutlineUser size={150} />
                    </div>
                    <div className="card-text">
                        <h2>Hamza Plojovic</h2>
                        <p>Just me.</p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Team;
