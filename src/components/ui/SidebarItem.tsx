import { ReactElement } from "react"

export const SidebarIcon = ({ text, icon }: {
    text: string,
    icon: ReactElement
} ) => {
    return <div className="flex items-center py-2 cursor-pointer
            hover:bg-gray-200 rounded max-w-52 pl-4 transition-all duration-300 ">
        <div className="p-2 pr-2">{icon}</div>
        <div className="">{text}</div>
    </div>
}