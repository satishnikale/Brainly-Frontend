// import React from 'react'
import { DeleteIcon } from "../../icons/DeleteIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";

interface cardProps {
    title: string,
    link: string,
    type: "twitter" | "youtube"
}
export function Card({title, link, type}: cardProps) {
    return (
        <div className='p-4 bg-white rounded-md border border-gray-300 max-w-72 font-medium min-h-48 min-w-72'>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <div className="pr-4 text-gray-500 cursor-pointer">{type== "twitter" ? <TwitterIcon size="md" /> : <YoutubeIcon />}</div>
                    <div className="pr-4">{title}</div>
                </div>
                <div className="flex justify-between items-center cursor-pointer">
                    <div className="pr-4 text-gray-500">
                        <a href={link} target="_black"></a>
                        <ShareIcon size="md" />
                    </div>
                    <div className="pr-4 text-gray-500"><DeleteIcon size="md" /></div>
                </div>
            </div>
            <div className="pt-4">
                {
                    type == "youtube" && <iframe 
                    className="w-full rounded-md"
                    src={link.replace("https://youtu.be/", "https://www.youtube.com/embed/")} 
                    title="YouTube video player" 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                    </iframe> 
                }
                
                {   
                    type == "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                    </blockquote>
                }
            </div>
        </div>
    )
}
