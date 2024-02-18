import { RevenueCard } from "./components/revenueCard"
import { BlueRevenueCard } from "./components/BlueRevenueCard"

function App() {


  return (
    <>
      <div className="flex flex-col m-4">
      {/* <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}></RevenueCard> */}
      {/* <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"}></RevenueCard> */}
      <BlueRevenueCard title={"Amount Processed"} amount={"23,92,312.19"} orderCount={26}></BlueRevenueCard>
      </div>
    </>
  )
}

export default App
