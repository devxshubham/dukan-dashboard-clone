import { RevenueCard } from "./components/revenueCard"
import { BlueRevenueCard } from "./components/BlueRevenueCard"
import { Navbar } from "./components/navbar"
import { Content } from "./components/Content"


function App() {


  return (
    <>
      <div className="">
          <Navbar></Navbar>
          <Content></Content>
          <div className="text-center text-gray-500 m-5">Made by <a className="underline font-bold " target="_blank" href="https://twitter.com/devxshubham">Shubham Dev</a></div>
      </div>
    </>
  )
}

export default App
