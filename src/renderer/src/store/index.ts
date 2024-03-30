import { messagesMock } from '@/store/mocks'
import { MessageInfo } from '@shared/models'
import { atom } from 'jotai'

export const messagesAtom = atom<MessageInfo[]>(messagesMock)

export const selectedMessageIndexAtom = atom<number | null>(null)

export const selectedMessageAtom = atom((get) => {
    const messages = get(messagesAtom)
    const selectedMessageIndex = get(selectedMessageIndexAtom)

    if (selectedMessageIndex == null) return null

    const selectedMessage = messages[selectedMessageIndex]

    return {
        ...selectedMessage,
        content: `Hello world`
    }
})