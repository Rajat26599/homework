import { Label } from "../label/Label"
import { TextareaWrapper, TextareaInput } from "./styles"

export const Textarea = (props) => {
    return (
        <TextareaWrapper>
            <Label>{props.label}</Label>
            <TextareaInput onChange={props.onChangeHandle}>{props.children}</TextareaInput>
        </TextareaWrapper>
    )
}

Textarea.defaultProps = {
    
}