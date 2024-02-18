export const RevenueCard = ({
    amount,
    title,
    orderCount
}) => {
    return <div className="bg-white rounded shadow-md p-4">
        <div className="flex m-2 text-gray-600">
            <div className="mr-2">{title}</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>

        </div>
        <div className="flex justify-between items-center m-2">
            <div className="text-3xl font-medium" >&#8377; {amount}</div>
            { orderCount ? <div className="flex text-blue-700 underline font-medium">{orderCount} orders 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </div> : <div></div> }
        </div>
    </div>
}