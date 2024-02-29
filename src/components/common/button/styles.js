import styled from "styled-components";

const getButtonWrapperStyles = (type) => {
    switch(type) {
        case 'home':
            return (
                `
                    position: absolute;
                    top: 2rem;
                    left: 2rem;
                ` 
            )
        case 'primary':
            return (
                `
                    margin-top: 1rem;
                    margin-bottom: 1rem;
                `
            )
        default:
    }
}

export const ButtonWrapper = styled.div`
    ${props => getButtonWrapperStyles(props.type)}
`
export const MyButton = styled.button`
    padding: 0.5rem;
    border-radius: 0.5rem;
`