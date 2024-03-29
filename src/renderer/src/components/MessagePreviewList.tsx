import { messagesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { MessagePreview } from './MessagePreview'

export const MessagePreviewList = ({ className, ...props}: ComponentProps<'ul'>) => {
    if (messagesMock.length === 0) {
        return (
        <ul className={twMerge('text-center pt-4', className)} {...props}>
            <span>No messages</span>
        </ul>
        )
    }
    return (
        <ul {...props}>
            {messagesMock.map((message) => (
                <MessagePreview key={message.contact + message.lastEditTime} {...message} />
            ))}
        </ul>
    )
}