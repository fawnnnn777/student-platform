'use client'
import { useState } from "react"
import clsx from "clsx"

export default function Dropdown({level}){

    const [menuOpen, setMenuOpen] = useState(false)

    return(
        <>
                <div className="border-2 border-black text-center">
                <button onClick={()=>setMenuOpen(!menuOpen)}>{level} Level</button>
                </div>
                <div className={ clsx('animate-show', {'hidden': menuOpen == false},
                    'flex-col flex'
                )}>
                 <button>things</button>
                 <button>videos </button>
                 <button>stuff</button>
                </div>
        </>
    )
}