import { useNavigate } from "react-router-dom";
import { useAppContext } from "../libs/context";
import { useEffect } from 'react';
import { getLoggedUser, logoutUser } from "../services/internalApiService";


const SuccessDisplay = () => {
    const { loggedUser, setLoggedUser } = useAppContext();
    const navigate = useNavigate();

    const handleClick = async () => {
        await logoutUser();
        navigate("/");
    };

    const handleGetLoggedUser = async () => {
        const [data] = await getLoggedUser();
        if (data) setLoggedUser(data);
        else navigate("/");
    };

    useEffect(() => {
        if (!loggedUser) handleGetLoggedUser();
    }, []);

    return (
        <main>
            <h1>Welcome {loggedUser?.username}</h1>
            <button className="btn btn-danger" onClick={handleClick}>Logout</button>
        </main>
    );
}

export default SuccessDisplay;