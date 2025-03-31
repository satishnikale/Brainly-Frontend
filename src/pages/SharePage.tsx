import { useContent } from "../hooks/useContent"

export const SharePage = () => {
    const[contents ] = useContent();
    return <div>
        <div className="flex gap-4 flex-wrap">
                {contents.map(({type, link, title}) => <Card
                 title={title} 
                 type={type} 
                 link={link}  
                 />
                )}
              </div>
    </div>
}