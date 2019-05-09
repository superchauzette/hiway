import React from 'react'
import YouTube from 'react-youtube'
import { Box, Heading2 } from './index'

const data = {
  title: "1'30 pour tout savoir",
  videoId: 'JNaFs7svUbI',
}

export function Video() {
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
        <Heading2 color="yellow">{data.title}</Heading2>
      </Box>
      <Box justifyContent="center">
        <YouTube
          className="youtube-video"
          videoId={data.videoId}
          onReady={event => event.target.playVideo()}
          opts={{ playerVars: { autoplay: 1 } }}
        />
      </Box>
    </Box>
  )
}
