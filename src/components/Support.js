import React from 'react'
import { Box } from '../components'
import speaker from '../assets/speaker.png'


const Item = ({ src, subtitle, tab, styleImg }) => (
  <Box flexDirection="column" alignItems="center" width="250px">
    <Box width="250px" {...styleImg}>
      <img src={src} width="100%" height="100%" />
    </Box>
    <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{subtitle}</p>
    <ul style={{ listStyle: 'none', textAlign: 'center', marginLeft: 0 }}>
      {tab.map(i => <li>{i}</li>)}
    </ul>
  </Box>
)

const Support = () => (
  <Box width="100%" alignItems="center" flexDirection="column">
    <Box flexDirection="column" width="100%" >
      <Box justifyContent="space-between" width="100%">
        <Item
          src={speaker}
          subtitle="24/24 – 7/7"
          tab={[
            '',
            'Tes coachs',
            'Tes partenaires',
            'La Communauté'
          ]}
        />
      </Box>
    </Box>
  </Box>
)

export default Support
