import { RecoilRoot, useRecoilValue } from "recoil"

import { Layout } from "./components/Layout"
import { SideBar } from "./components/sidebar"


function App() {

  return (
    <>
      <RecoilRoot>
      <div className="flex transition-all ease-in duration-900 delay-0">
          <SideBar></SideBar>
          <Layout></Layout>
      </div>
      </RecoilRoot>
    </>
  )
}

export default App
