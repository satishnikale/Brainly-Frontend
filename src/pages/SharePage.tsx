import { Card } from "../components/ui/Card";
import { useContent } from "../hooks/useContent"

export const SharePage = () => {
    const { contents } = useContent();
    return <div>
        <div className="flex gap-4 flex-wrap p-8">
                {contents.map(({type, link, title}) => <Card
                 title={title} 
                 type={type} 
                 link={link}  
                 />
                )}
              </div>
    </div>
}