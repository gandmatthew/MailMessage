import { useMessageCompose } from "@renderer/hooks/useMessageComposeView";
import { usedMessagesList } from "@renderer/hooks/useMessagesList";
import { messagesMock } from "@renderer/store/mocks";
import { MessageBubble } from "./MessageBubble";

export const MessageComposeView = () => {
    const {messages, selectedMessageIndex, handleMessageSelect} = usedMessagesList({})

    const { selectedMessage } = useMessageCompose()

    if (!selectedMessage) return null

    const contact = messagesMock.filter(message => message.contact === "Adam");
    
    return (
        <div className="flex-1 overflow-auto">
            {selectedMessage.messages.map((message) => (
                <MessageBubble text={message} />
            ))}
        </div>
    )
}