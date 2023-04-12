import { useNavigate } from "react-router-dom";
import { useAppContext } from "../libs/context";
import { useEffect } from 'react';
import axios from 'axios';

const SuccessDisplay = () => {
    const { loggedUser, setLoggedUser } = useAppContext();
    const navigate = useNavigate();

    const handleClick = () => {
        axios.delete("http://localhost:8000/api/auth", { withCredentials: true })
            .then(_ =>  navigate("/"));
    }

    useEffect(() => {
        if (!loggedUser) {
            axios.get("http://localhost:8000/api/auth", { withCredentials: true })
                .then(res => setLoggedUser(res.data))
                .catch(_ => navigate("/"));
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