import { useNavigate } from "react-router-dom";
import { useAppContext } from "../libs/context";
import { useEffect } from 'react';
import { getLoggedUser, logoutUser } from "../services/apiService";


const SuccessDisplay = () => {
    const { loggedUser, setLoggedUser } = useAppContext();
    const navigate = useNavigate();

    const handleClick = () => {
        logoutUser()
            .then(() => {
                navigate("/")
            });
    }

    useEffect(() => {
        if (!loggedUser) {
            getLoggedUser()
                .then(([data]) => {
                    if (data) {
                        setLoggedUser(data);
                    } else {
                        navigate("/")
                    }
                })
        }
    }, [])

    return (
        <main>
            <h1>Welcome {loggedUser?.username}</h1>
            <button className="btn btn-danger" onClick={handleClick}>Logout</button>
        </main>
    )
}

export default SuccessDisplay;