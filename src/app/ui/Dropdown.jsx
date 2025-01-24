'use client'
import { useState } from "react"
import clsx from "clsx"
import { raleway } from "./fonts"

export default function Dropdown({level, content}){

    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>
        <div className="gap-5">
                <div className="text-center m-3 flex justify-center">
                    <button className={`${raleway.className} rounded-3xl text-white bg-black p-5 text-3xl border-2 border-black w-full`} onClick={()=>setMenuOpen(!menuOpen)}>{level} Level</button>
                </div>
                <div className={ clsx('animate-show', {'hidden': menuOpen == false},
                    'flex-col flex gap-5 flex justify-center items-center'
                )}>
                 <iframe width="315" height="160" src="https://www.youtube.com/embed/PUZibFqf6yU?si=ZQPurCtAHgTDxNyk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 <iframe width="315" height="160" src="https://www.youtube.com/embed/E20EA_-Sqzo?si=S0lcCO7VGxeiiBhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                 <iframe width="315" height="160" src="https://www.youtube.com/embed/POIJlHgbMIY?si=4H7rUbuqNAZK6oYo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>           
                </div>
        </div>
        </>
    )
}