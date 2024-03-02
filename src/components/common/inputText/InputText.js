import { Label } from "../label/Label"
import { Input, InputTextWrapper } from "./styles"

export const InputText = (props) => {
    return (
        <InputTextWrapper>
            <Label>{props.label}</Label>
            <Input value={props.value} onChange={props.onChangeHandle} />
        </InputTextWrapper>
    )
}

InputText.defaultProps = {
    label: '',
    value: '',
}