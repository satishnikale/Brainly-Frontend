import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const usernameRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    async function signup(){
       const username =  usernameRef.current?.value;
       const password =  passwordRef.current?.value;

       await axios.post(BACKEND_URL + "api/v1/signup", {
            username,
            password
       });
       alert("You are Sign Up!");
       navigate("/signin");
    }


    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className="bg-white rounded-xl min-w-48 p-10">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />

            <div className="flex justify-center pt-4">
                <Button onClick={signup} varient="secondary" text="Sign Up" size="md" fullWidth={true} />
            </div>
        </div>

    </div>
}