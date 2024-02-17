import { RevenueCard } from "./components/revenueCard"

function App() {


  return (
    <>
      <div className="m-20">
      <RevenueCard title={"Amount Pending"} amount={"92312.20"} orderCount={13}></RevenueCard>
      </div>
    </>
  )
}

export default App
