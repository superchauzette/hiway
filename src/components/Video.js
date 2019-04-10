import React from 'react'
import YouTube from 'react-youtube'
import { Box, Heading2 } from './index'

class Video extends React.Component {
  _onReady = event => event.target.playVideo()
  render() {
    return (
      <Box
        flexDirection="column"
        bg="#343a5e"
        width="100%"
        justifyContent="center"
        alignItems="center"
        py={40}
      >
        <Box w={['100%', '60%', '60%']} justifyContent="center" width="100%">
          <Heading2 color="yellow">1'30 pour tout savoir</Heading2>
        </Box>
        <Box justifyContent="center">
          <YouTube
            className="youtube-video"
            videoId="JNaFs7svUbI"
            onReady={this._onReady}
            opts={{ playerVars: { autoplay: 1 } }}
          />
        </Box>
      </Box>
    )
  }
}

export default Video
