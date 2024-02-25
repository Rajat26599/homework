import { Button, HomeButtonWrapper } from "./styles"
import { Link } from "react-router-dom"

export const HomeButton = () => {
    return (
        <HomeButtonWrapper>
            <Link to='/'>
                <Button>Home</Button>
            </Link>
        </HomeButtonWrapper>
    )
}