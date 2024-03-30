import { MessagePreview } from '@/components/MessagePreview'
import { messagesMock } from '@/store/mocks'
import { usedMessagesList } from '@renderer/hooks/useMessagesList'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const MessagePreviewList = ({ className, ...props}: ComponentProps<'ul'>) => {
    const {messages, selectedMessageIndex, handleMessageSelect} = usedMessagesList({})

    if (messages.length === 0) {
        return (
        <ul className={twMerge('text-center pt-4', className)} {...props}>
            <span>No messages</span>
        </ul>
        )
    }
    return (
        <ul className={className} {...props}>
            {messagesMock.map((message, index) => (
                <MessagePreview 
                key={message.contact + message.lastEditTime} {...message}
                isActive={selectedMessageIndex === index}
                onClick={handleMessageSelect(index)}
                {...message}
                />
            ))}
        </ul>
    )
}