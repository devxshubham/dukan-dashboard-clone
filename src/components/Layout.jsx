import { Navbar } from "./navbar"
import { Content } from "./Content"

import { isOpenAtom } from "../store/atom/isOpenAtom"
import { useRecoilState } from "recoil"

export const Layout = ()=>{
    const [isOpen, setOpen ] = useRecoilState(isOpenAtom)

    return <div className="w-full z-5 transition-all duration-900 delay-0">
        { isOpen 
            ?<div className="fixed lg:hidden z-5 inset-0 transition-opacity bg-gray-500 bg-opacity-75" 
                onClick={() => {
                    setOpen(!isOpen)
                }}></div>
            : <></>
        }

        <Navbar></Navbar>
        <Content></Content>
        <div className="text-center pb-[150px] text-gray-500 m-5">Made by <a className="underline font-bold " target="_blank" href="https://twitter.com/devxshubham">Shubham Dev</a></div>
    </div>
}