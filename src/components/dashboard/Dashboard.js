import { AppsContainer, Card, CardWrapper, DashboardWrapper, Video, VideoWrapper } from "./styles"
import { Link } from "react-router-dom"

import paintSplash from '../../assets/img/paintSplash.mp4'

export const Dashboard = () => {
    const apps = [
        {
            title: 'Homework',
            url: '/homework',
        }, 
        {
            title: 'Cover Letter Generator',
            url: '/cover-letter-generator',
        }]
    return (
        <DashboardWrapper>
            <VideoWrapper>
                <Video loop autoPlay controls={false} muted>
                    <source src={paintSplash} type="video/mp4" />
                </Video>
            </VideoWrapper>
            <AppsContainer>
                <CardWrapper>
                    {
                        apps.map((app, index) => (
                            <li key={index}>
                                <Link to={app.url}>
                                    <Card>{app.title}</Card>
                                </Link>
                            </li>
                        ))
                    }
                </CardWrapper>
                <h6 style={{'position': 'relative', 'bottom': 0, 'marginTop': '2rem'}}>Made with ❤️ by Rajat Saxena</h6>
            </AppsContainer>
        </DashboardWrapper>
    )
}