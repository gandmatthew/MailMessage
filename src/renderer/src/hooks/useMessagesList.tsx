import { messagesAtom, selectedMessageIndexAtom } from "@renderer/store"
import { useAtom, useAtomValue } from "jotai"

export const usedMessagesList = ({onSelect}: {onSelect?: () => void}) => {
    const messages = useAtomValue(messagesAtom)

    const [selectedMessageIndex, setSelectedMessageIndex] = useAtom(selectedMessageIndexAtom)

    const handleMessageSelect = (index: number) => async() => {
        setSelectedMessageIndex(index)

        if (onSelect) {
            onSelect()
        }
    }

    return {
        messages,
        selectedMessageIndex,
        handleMessageSelect
    }
}