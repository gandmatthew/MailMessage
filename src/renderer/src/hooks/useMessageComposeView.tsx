import { selectedMessageAtom } from "@renderer/store"
import { useAtomValue } from "jotai"

export const useMessageCompose = () => {
    const selectedMessage = useAtomValue(selectedMessageAtom)

    return {
        selectedMessage
    }
}