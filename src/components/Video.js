import React from 'react'
import { Box, Text } from './index'
import YouTube from 'react-youtube';

class Video extends React.Component {
  _onReady = event => event.target.playVideo()
  render() {
    return (
      <Box
        flexDirection="column"
        bg="white"
        width="100%"
        justifyContent="center"
        alignItems="center"
        py={40}
      >
      <Box w={['100%', '60%', '60%']} textAlign="center">
        <h2 className="yellow">
          Les atouts du Freelancing et l'accompagnement Hiway pour se lancer et réussir dans le Freelancing
        </h2>
      </Box>
      <Box justifyContent="center" width={['100%', '640', 1000]} height={[200, '390', '390px']}>
        <YouTube
          videoId="JNaFs7svUbI"
          onReady={this._onReady}
          opts={{

            playerVars: {
              autoplay: 1
            }
          }}
        />
      </Box>
      </Box >
    )
  }
}

export default Video
