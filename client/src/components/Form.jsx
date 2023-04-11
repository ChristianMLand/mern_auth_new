import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../libs/context";
import axios from "axios";

const Form = props => {
    const { name, action, fields } = props;
    const initialValues = Object.keys(fields).reduce((prev, field) => ({ ...prev, [field]: "" }), {});
    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const { setLoggedUser } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        setFormErrors({});
        axios.post(`http://localhost:8000/api/${action}`, formData, { withCredentials: true })
            .then(res => {
                setLoggedUser(res.data);
                navigate("/success")
            })
            .catch(errors => setFormErrors(errors.response.data.errors));
    }

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <form className="col-4" onSubmit={handleSubmit}>
            <fieldset className="border p-3">
                <legend className="float-none w-auto">{name}</legend>
                { Object.entries(fields).map(([name, type], i) => 
                    <div className="control-group" key={i}>
                        <input
                            className="form-control mb-2"
                            placeholder={name} 
                            name={name}
                            type={type} 
                            value={formData[name]}
                            onChange={handleChange}
                        />
                        { formErrors[name] && <p className="alert alert-danger">{formErrors[name].message}</p> }
                    </div>
                )}
                <button className="btn btn-secondary" type="submit">{name}</button>
            </fieldset>
        </form>
    )
}

export default Form;