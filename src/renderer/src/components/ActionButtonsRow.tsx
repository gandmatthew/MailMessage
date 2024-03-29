import { ComponentProps } from "react"
import { DeleteMessageButton } from "./Button/DeleteMessageButton"
import { NewMessageButton } from "./Button/NewMessageButton"

export const ActionButtonsRow = ({...props}: ComponentProps<'div'>) => {
    return (
        <div {...props}>
            <NewMessageButton />
            <DeleteMessageButton />
        </div>
    )
}