import React from 'react'
import { Box, Text } from './index'
import YouTube from 'react-youtube';

class Video extends React.Component {
  _onReady = event => event.target.playVideo()
  render() {
    return (
      <Box
        flexDirection="column"
        bg="gray"
        width="100%"
        justifyContent="center"
        alignItems="center"
        py={40}
      >
        <Box w={['100%', '60%', '60%']} justifyContent="center" width="100%">
          <h2 className="yellow">
            1'30 pour tout savoir
        </h2>
        </Box>
        <Box justifyContent="center">
          <YouTube
            className="youtube-video"
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
