import { VideoBackgroundWrapper, Video } from "./styles"

import paintSplash from '../../../assets/img/paintSplash.mp4'

export const VideoBackground = () => {
    return (
        <VideoBackgroundWrapper>
            <Video loop autoPlay controls={false} muted>
                <source src={paintSplash} type="video/mp4" />
            </Video>
        </VideoBackgroundWrapper>
    )
}