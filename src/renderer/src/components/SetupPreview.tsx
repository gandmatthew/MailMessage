import { ComponentProps } from "react"

export const SetupPreview = ({ className, ...props}: ComponentProps<'ul'>) => {
    return (
        <ul {...props}>
        </ul>
    )
}