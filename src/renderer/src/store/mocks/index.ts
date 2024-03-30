import { MessageInfo } from '@shared/models'

export const messagesMock: MessageInfo[] = [
    {
        contact: "Adam",
        lastEditTime: new Date().getTime(),
        messages: [["s", "Hello World! This is Adam"], ["r", "Goodbye Adam!"], ["r", "Recieving Adam"], ["s", "Sending Adam"]]
    },
    {
        contact: "Bryan",
        lastEditTime: new Date().getTime(),
        messages: [["s", "Hi this is Bryan"], ["r", "How are you doing Bryan"]]
    }
]