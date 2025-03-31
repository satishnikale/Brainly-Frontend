import { BrainIcon } from "../../icons/Logo"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YoutubeIcon } from "../../icons/YoutubeIcon"
import { SidebarIcon } from "./SidebarItem"

export const Sidebar = ()=> {
    return <div className="h-screen bg-white position-fixed top-0 left-0 w-72 pl-6 border-gray-500 border-r">
    
            <div className="flex text-2xl pt-8 items-center ">                
                <div className="pr-2 text-purple-400">
                    <BrainIcon />
                </div>
                Brainly 
            </div>
            <div className="pt-4 pl-4">
                <SidebarIcon text="Tweet" icon={<TwitterIcon size="md"/>} />
                <SidebarIcon text="Videos" icon={<YoutubeIcon />} />
            </div>
        </div>
    
}