import { Navbar } from "./components/navbar"
import { Content } from "./components/Content"

import { isOpenAtom } from "./store/atom/isOpenAtom"
import { useRecoilValue } from "recoil"

export const Layout = ()=>{
    const isOpen = useRecoilValue(isOpenAtom)

    return <div>
        { isOpen 
            ?<div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>
            : <div></div>
        }

        <Navbar></Navbar>
        <Content></Content>
        <div className="text-center text-gray-500 m-5">Made by <a className="underline font-bold " target="_blank" href="https://twitter.com/devxshubham">Shubham Dev</a></div>
    </div>
}