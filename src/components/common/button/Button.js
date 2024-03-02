import { ButtonWrapper, MyButton } from "./styles"

export const Button = (props) => {
    return (
        <ButtonWrapper type={props.type}>
            <MyButton type={props.type}>{props.children}</MyButton>
        </ButtonWrapper>
    )
}

Button.defaultProps = {
    type: 'primary'
}