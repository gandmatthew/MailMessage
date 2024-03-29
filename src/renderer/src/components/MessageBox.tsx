
export const MessageBox = () => {
    return (
        <div className="flex flex-col h-screen justify-end">
            <div className="p-4 mb-0 rounded-lg justify-between">
                <form className="flex">
                    <input className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none" type="text" placeholder="Type a message..." />
                    <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full" type="submit">Send</button>
                </form>
            </div>
        </div>
        
    )
}
