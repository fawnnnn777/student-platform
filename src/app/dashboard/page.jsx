import Link from 'next/link'
import {montserrat, raleway} from '../ui/fonts'

export default function Page(){
    return(
        <>
        <div className="bg-background content-center flex justify-center">
            <h1 className={`text-4xl text-center ${montserrat.className} mt-2`}>¿Que deseas practicar?</h1>
            <div className=" text-center overflow-scroll flex-col flex items-center  bg-amber-200 h-128 absolute bottom-2 w-96 rounded-3xl mx-auto">
                <Link href='/dashboard/grammar' className={`${raleway.className} rounded-3xl text-white bg-black p-5 text-3xl m-5 border-2 border-black w-5/6`}>Pronunciation</Link>
                <Link  href='/dashboard/grammar' className={`${raleway.className} rounded-3xl text-white bg-black p-5 text-3xl m-5 border-2 border-black w-5/6`}>Grammar</Link>
                <Link href='/dashboard/grammar' className={`${raleway.className} rounded-3xl text-white bg-black p-5 text-3xl m-5 border-2 border-black w-5/6`}>Intonation</Link>
                <Link href='/dashboard/grammar' className={`${raleway.className} rounded-3xl text-white bg-black p-5 text-3xl m-5 border-2 border-black w-5/6`}>Fluency</Link>
                <Link href='/dashboard/grammar' className={`${raleway.className} rounded-3xl text-white bg-black p-5 text-3xl m-5 border-2 border-black w-5/6`}>More</Link>
            </div>
        </div>
    </>
    )
}