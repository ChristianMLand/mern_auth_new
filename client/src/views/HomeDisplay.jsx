import Form from '../components/Form';
import { registerUser, loginUser } from '../services/internalApiService';

const HomeDisplay = () => {
    return (
        <main className="row justify-content-center">
            <Form 
                name="Register"
                service={registerUser}
                fields={{
                    username: "text",
                    email: "text",
                    password: "password",
                    confirmPassword: "password"
                }}
            />
            <Form 
                name="Login"
                service={loginUser}
                fields={{
                    email: "text",
                    password: "password"
                }}
            
            />
        </main>
    )
}

export default HomeDisplay;