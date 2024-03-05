import {useRecoilValue } from "recoil"
import { isOpenAtom } from "../store/atom/isOpenAtom"
import { navlink } from "../store/atom/svg"

export const SideBar = () => {
    const isOpen = useRecoilValue(isOpenAtom)

    return <div className={`fixed lg:sticky w-[224px] flex flex-col z-10  top-0 left-0 bottom-0 justify-between h-[100dvh]  px-[10px] py-[16px] transition-all duration-400 ease-in-out delay-0 bg-[#1E2640] text-white
            ${ isOpen
                ?"translate-x-0 " : "-translate-x-full lg:translate-x-0 "
            }
        `}>
        <div className="flex mx-[10px] flex-col gap-6">
            <div className="flex justify-between w-fit mx-auto items-center gap-3">
                <div className="w-[40px] h-[40px] m-[.1px]">
                    <img className="object-cover object-center h-[100%] w-[100%] rounded" src="https://s3-alpha-sig.figma.com/img/18ef/52d9/1494ed3109e53ab9db09579cd5d8839e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CfsRd2oMD1BF0jefyPcfOiL9-pod42UgixSOqDXZ3LBLsVZDcUfRFFNbqxYUAyNOLdvoXKQCag~I1EXlU3LxLLLNViGvBQuDw9kd9vqXz7EJ9uOvYYrBh0vTNl5-hGj4l~FevvCDKIyh6vNmIUJI7qotHaCohfgNYL00bQy1At2PBO7NiYYaSP~kO5zxvfpnoxNkdYFJzu~v7FVqKPDde3nv86LktLSQ5wcC0g4CNjcvpoRKDV4EunvQa3ztjolCmIiEDapYJgVVWahhFiWCt-BBUeFpTDdcXPjzkzgRJQTX916Vja64pisb-RpBkKDycQ5d6gCBPEKAoBsVNmmjfA__" alt="" />
                </div>
                <div className="flex flex-col justify-center w-[108px] gap-1">
                    <h5 className="font-medium leading-4">Nishyan</h5>
                    <p className="font-light underline leading-3 text-sm">Visit Store</p>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            <div>
                {navlink.map( nav => {
                    return <div className={`flex px-4 py-2 gap-3 items-center hover:bg-[#FFFFFF]/10 rounded
                        ${(nav.title=="Payouts") ? "bg-[#FFFFFF]/10" : ""}
                        `} key={nav.title}>
                        <div >{nav.svg}</div>
                        <div className="text-[14px] font-medium text-[#D2D4D9]">{nav.title}</div>
                </div>
                })}
            </div>
        </div>

        <div className="flex py-[6px] px-[3px] rounded gap-3 items-center bg-[#353C53]">
            <div className="rounded ml-2 p-2 bg-[#ffffff]/10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
            </svg>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-[13px] font-light">Available Credits</p>
                <h5 className="text-[16px] font-medium">224.10</h5>
            </div>
        </div>
    </div>
}