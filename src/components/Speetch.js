import React from 'react'
import { Box, Heading1, Heading3 } from '.'

const data = {
  title:
    ' Hiway révolutionne le freelancing en créant le Freelancing as a Service',
  text: `
    Le dynamisme des métiers de la Tech crée une opportunité pour se
    lancer dans le freelancing. A condition de bien en appréhender la
    dimension entrepreneuriale. Nous avons donc créé une solution unique
    qui répond à tous tes besoins : le Freelancing as a Service. En
    intégrant un parcours d’accompagnement personnalisé et en confiant
    la gestion à Hiway, tu t’assures de parfaitement réussir ton projet.`,
}

export function Speetch() {
  return (
    <Box
      style={{ backgroundAttachment: 'fixed' }}
      backgroundImage="https://res.cloudinary.com/hopwork/image/upload/q_auto,dpr_1.0/v1503305485/corpo/landing-banner-bg.webp"
    >
      <Box
        p="30px"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        bg="#00000070"
      >
        <Heading1 color="white" width={['100%', '70%']}>
          {data.title}
        </Heading1>

        <Box
          flexDirection="column"
          textAlign="center"
          width={['100%', '60%']}
          mt="30px"
        >
          <Heading3 color="white">{data.text}</Heading3>
        </Box>
      </Box>
    </Box>
  )
}
