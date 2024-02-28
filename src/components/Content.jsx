import { BlueRevenueCard } from "./BlueRevenueCard"
import { RevenueCard } from "./revenueCard"
import { TableSearch } from "./TableSearch"
import { TransactionTable } from "./TransactionTable"

import { isOpenAtom } from "../store/atom/isOpenAtom"
import { useRecoilValue } from "recoil"

export const Content = () => {
    const isOpen = useRecoilValue(isOpenAtom)

    return <main className={`flex flex-col gap-8 p-3

        `}>
        <div className="flex justify-between items-center mb-5">
            <h5 className="text-xl font-medium">Overview</h5>
            <button className="flex border rounded font-l py-[6px] px-[14px] text-[#4D4D4D] gap-3">
                This Month <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
            </button>
        </div>

        <div className="flex gap-5 flex-wrap">
            <BlueRevenueCard title={"Next Payout"} amount={"2,312.23"} orderCount={26}></BlueRevenueCard>
            <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={13}></RevenueCard>
            <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"}></RevenueCard>
        </div>

        <div className="flex flex-col gap-6">
            <h5 className="font-medium text-xl text-[#1A181E]">Transactions | This Month</h5>

            <div className="flex gap-3">
                <button className="rounded-full bg-[#E6E6E6] px-[16px] py-[6px] text-[#808080]">
                    Payouts (22)
                </button>
                <button className="rounded-full bg-[#146EB4] px-[16px] py-[6px] text-[#FFFFFF]">Payouts (16)</button>
            </div>
        </div>

        <TableSearch></TableSearch>
        <TransactionTable></TransactionTable>
    </main>
}

