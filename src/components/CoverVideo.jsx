import styled from "styled-components";
import Video from "../assets/Home_Video.mp4"
function CoverVideo() {
    return ( 
        <VideoContainer>
            <video 
                src={Video} 
                type="video/mp4"
                autoPlay
                muted
                loop
            />
        </VideoContainer>
        
     );
}

export default CoverVideo;

const VideoContainer = styled.div`
    width: 100%;
    video {
        width: 100%;
        height: auto;
        @media (max-width: 64em) {
            min-width: 40vh;
        }
  }
`;