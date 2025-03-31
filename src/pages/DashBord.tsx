import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { CreateContentModel } from "../components/ui/CreateContentModel";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Sidebar } from "../components/ui/Sidebar";
import { useContent } from "../hooks/useContent";
import { BACKEND_URL } from "../config";
import axios from "axios";

function DashBord() {
  const [ modalOpen, setModelOpen ] = useState(false);
  const {contents, refresh } = useContent();

  useEffect(() =>{
    refresh();
  }, [modalOpen]);

  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="p-4 w-full min-h-screen bg-gray-100"> 
      <CreateContentModel open={modalOpen} onClose={ () => 
        setModelOpen(false)
      } />  

      <div className="flex justify-end gap-4">
        <Button onClick={ async ()=> {
          const response = await axios.post(BACKEND_URL + "api/v1/brain/share",{
              share : true
          }, {
            headers: {
              "Authorization" : localStorage.getItem("token")
            }
          });
          const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
          alert(shareUrl)
        }} startIcon={<ShareIcon size="md"/>} varient="primary" size="sm" text="Share Brain" />

        
        <Button onClick={ () =>
          setModelOpen(true)
        } startIcon={<PlusIcon size="md"/>} varient="secondary" size="md" text="Add Content"/>
      </div>
      
      <div className="flex gap-4 flex-wrap">
        {contents.map(({type, link, title}) => <Card
         title={title} 
         type={type} 
         link={link}  
         />
        )}
      </div>
      </div>
    </div>
  )
}

export default DashBord;