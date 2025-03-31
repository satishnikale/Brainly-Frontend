import { CrossIcon } from "../../icons/CrossIcon"
import { Input } from "./Input"
import { Button } from "./Button"
import { useRef, useState } from "react"
import { BACKEND_URL } from "../../config";
import axios from "axios";

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export function CreateContentModel({open, onClose}: any){
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();    
    const [type , setType] = useState(ContentType.Twitter);

    async function addContent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(BACKEND_URL + "api/v1/content", 
            {
               title, 
               link, 
               type
            },{
                headers: {
                    "Authorization": localStorage.getItem("token")
                }

             });
             onClose();
    }

    return <div>
        {open && <div>             
            <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 flex justify-center opacity-60">
            
            </div>

            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center opacity-100">
            <div className="flex flex-col justify-center">
                <span className="bg-white p-4 rounded">
                    <div className="flex justify-end mb-4 cursor-pointer">
                        <div onClick={onClose}>
                        <CrossIcon size="md" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Input reference={titleRef} placeholder="Title" />
                        <Input reference={linkRef} placeholder="Link" />
                    </div>
                    <div className="pb-4">
                        <div className="flex pb-4 justify-center font-medium pt-4">
                            <h3>Content Type</h3>
                        </div>
                        <div className="flex justify-evenly ">
                        <Button text="Youtube" varient={type === ContentType.Youtube ? "secondary" : "primary"} onClick={() => {
                            setType(ContentType.Youtube)
                        }} size="md"/>

                        <Button text="Twitter" varient={type === ContentType.Twitter ? "secondary" : "primary"} onClick={() => {
                            setType(ContentType.Twitter)
                        }} size="md" />
                        </div>                        
                    </div>
                    <Button onClick={addContent} varient="secondary" text="Submit" size="md" fullWidth={true} />
                </span>
            </div>
            </div>

            </div>
        }
    </div>
}