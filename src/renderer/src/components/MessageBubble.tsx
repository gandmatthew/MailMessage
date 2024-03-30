export const MessageBubble = ({ text }) => {
    const isLink = /(http(s)?:\/\/[^\s]+)/g.test(text[1]); // Regular expression to check if text contains a link

    const renderText = () => {
        if (isLink) {
            return (
                <a className="underline" href={text[1]} target="_blank" rel="noopener noreferrer">
                    {text[1]}
                </a>
            );
        } else {
            return <span>{text[1]}</span>;
        }
    };

    if (text[0] === "s") {

        return (
            <div className='flex justify-end mb-2 mt-2 mr-2 ml-2'>
                <div className='bg-gray-300 text-sm text-black rounded-lg p-2 max-w-xs break-words items-center select-text'>
                    <p className="flex-1">{renderText()}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className='flex justify-start mb-2 mt-2 mr-2 ml-2'>
                <div className='bg-blue-500 text-sm text-black rounded-lg p-2 max-w-xs break-words items-center select-text'>
                    <p className="flex-1">{renderText()}</p>
                </div>
            </div>
        )
    }         
}