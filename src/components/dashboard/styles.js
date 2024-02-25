import styled from "styled-components";

export const DashboardWrapper = styled.div`
    display: flex;
`
export const VideoWrapper = styled.div`
    width: 60%;
    height: 100vh;
    overflow-y: hidden;
`
export const Video = styled.video`
    width: 100%;
    height: 101vh;
    object-fit: cover;
`
export const AppsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-content: center;
    align-items: center;
`
export const CardWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
`
export const Card = styled.h2`
    background-color: #000410;
    padding: 1rem;
    margin: 1rem;
    border-radius: 1rem;
    text-align: center;
`