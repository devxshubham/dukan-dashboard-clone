import { RecoilRoot, useRecoilValue } from "recoil"

import { Layout } from "./Layout"
import { SideBar } from "./components/sidebar"



function App() {


  return (
    <>
      <RecoilRoot>
      <div className="flex">
          <SideBar></SideBar>
          <Layout></Layout>
      </div>
      </RecoilRoot>
    </>
  )
}

export default App
