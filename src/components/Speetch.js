import React from 'react'
import { Box, Heading1, Heading3 } from '.'

export const Speetch = () => (
  <Box
    p="30px"
    flexDirection="column"
    alignItems="center"
    textAlign="center"
    style={{ position: 'relative' }}
    bg="#00000070"
  >
    <Box
      style={{
        position: 'fixed',
        height: '100%',
        top: 0,
        width: '100%',
        zIndex: -1,
      }}
      bg="#343a5e"
      backgroundImage="https://res.cloudinary.com/hopwork/image/upload/q_auto,dpr_1.0/v1503305485/corpo/landing-banner-bg.webp"
    />
    <Heading1 color="white" width="70%">
      Hiway révolutionne le freelancing en créant le Freelancing as a Service
    </Heading1>

    <Box flexDirection="column" textAlign="center" width="60%" mt="30px">
      <Heading3 color="white">
        Les compétences Tech sont très demandées et le statut de freelance offre
        des atouts majeurs. Un expert de la Tech a donc tout intérêt à se
        lancer.
      </Heading3>
      <Heading3 color="white">
        Mais, après avoir partagé les retours d’expériences de nombreux
        freelances, nous avons pu confirmer à quel point la dimension
        entrepreneuriale est complexe à appréhender.
      </Heading3>
      <Heading3 color="white">
        Ainsi, pour permettre à tous de se lancer et réussir dans le
        freelancing, nous avons donc créé une solution unique qui répond à tous
        les besoins d’un freelance : le freelancing as a service.
      </Heading3>
      <Heading3 color="white">
        En intégrant un parcours d’accompagnement personnalisé et en confiant la
        gestion à Hiway, le freelance s’assure de parfaitement réussir son
        projet.
      </Heading3>
    </Box>
  </Box>
)

export default Speetch
