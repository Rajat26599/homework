import { LabelWrapper, MyLabel } from "./styles"

export const Label = (props) => {
    return (
        <LabelWrapper>
            <MyLabel>{props.children}</MyLabel>
        </LabelWrapper>
    )
}