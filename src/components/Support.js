import React from 'react'
import { Box } from '../components'
import pointInterogation from '../assets/point-interogation.png'
import conversation from '../assets/conversation.png'
import speaker from '../assets/speaker.png'


const Item = ({ src, subtitle, tab, styleImg }) => (
  <Box flexDirection="column" alignItems="center" width="250px">
    <Box width="120px" {...styleImg}>
      <img src={src} width="100%" height="100%" />
    </Box>
    <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{subtitle}</p>
    <ul style={{ listStyle: 'none', textAlign: 'center', marginLeft: 0 }}>
      {tab.map(i => <li>{i}</li>)}
    </ul>
  </Box>

)

const Support = () => (
  <Box bg="white" width="100%" alignItems="center" flexDirection="column">
    <h2 style={{ textAlign: 'center', marginBottom: '60px' }}> Un support permanent  </h2>

    <Box flexDirection="column" width="100%" >
      <Box justifyContent="space-between" width="100%">
        <Item
          src={pointInterogation}
          subtitle="Support 360°"
          tab={[
            'Gestion',
            'Business',
            'Perspectives',
            'Vie de Freelance',
            'Traitement des imprévus'
          ]}
        />

        <Item
          src={conversation}
          styleImg={{ width: '110px', height: '80px' }}
          subtitle="24/24 – 7/7"
          tab={[
            'Rdv',
            'Call',
            'SmS',
            'Mail',
            'Slack'
          ]}
        />

        <Item
          src={speaker}
          subtitle="Le bon interlocuteur"
          tab={[
            '',
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
