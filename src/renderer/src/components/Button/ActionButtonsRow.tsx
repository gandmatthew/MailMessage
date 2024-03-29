import { ComponentProps } from "react"
import { DeleteMessageButton } from "./DeleteMessageButton"
import { NewMessageButton } from "./NewMessageButton"

export const ActionButtonsRow = ({...props}: ComponentProps<'div'>) => {
    return (
        <div {...props}>
            <NewMessageButton />
            <DeleteMessageButton />
        </div>
    )
}