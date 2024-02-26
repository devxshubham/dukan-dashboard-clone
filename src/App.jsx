import { RecoilRoot } from "recoil"

import { Navbar } from "./components/navbar"
import { Content } from "./components/Content"
import { SideBar } from "./components/sidebar"


function App() {


  return (
    <>
      <RecoilRoot>
      <div className="flex">
          <SideBar></SideBar>
          <div>
            <Navbar></Navbar>
            <Content></Content>
            <div className="text-center text-gray-500 m-5">Made by <a className="underline font-bold " target="_blank" href="https://twitter.com/devxshubham">Shubham Dev</a></div>
          </div>
      </div>
      </RecoilRoot>
    </>
  )
}

export default App
