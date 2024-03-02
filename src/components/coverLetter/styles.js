import styled from "styled-components";

export const CoverLetterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 5rem;
`
const BackgroundCard = styled.div`
    background-color: rgba(0,0,0,0.5);
    padding: 1rem;
    border-radius: 1rem;
`
export const SidebarWrapper = styled(BackgroundCard)`
    width: 20%;
`
export const MainWrapper = styled(BackgroundCard)`
    display: flex;
    width: 70%;
    min-height: 70vh;
`