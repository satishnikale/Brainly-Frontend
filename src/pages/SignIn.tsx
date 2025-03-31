import axios from "axios";
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signin(){
       const username =  usernameRef.current?.value;
       const password =  passwordRef.current?.value;

       const response = await axios.post(BACKEND_URL + "api/v1/signin", {
            username,
            password
       });
       const jwt = response.data.token;
       localStorage.setItem("token", jwt);
       // redirect user to the dashboard
       navigate("/home");
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl min-w-48 p-10">
                <Input reference={usernameRef} placeholder="Username" />
                <Input reference={passwordRef} placeholder="Password" />
                <div className="flex justify-center pt-4">
                    <Button onClick={signin} varient="secondary" text="Sign In" size="md" fullWidth={true} />
                </div>
            </div>    
        </div>
}