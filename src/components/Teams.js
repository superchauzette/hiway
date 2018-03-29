import React from 'react'
import { Box, Text } from '../components'
import bgheader from '../assets/bg-header.jpg'
import vince from '../assets/vince.jpg'
import alex from '../assets/alex.jpg'
const clement =
  'https://medias.unifrance.org/medias/147/213/120211/format_page/clement-aubert.jpg'

const Team = ({ name, photo, metier }) => (
  <Box flexDirection="column" p="10px">
    <img src={photo} className="picture" alt="" width="150px" height="150px" />
    <p>
      <span className="yellow">{name}</span> <br /> {metier}
    </p>
  </Box>
)

const Teams = () => (
  <Box
    bg="gray"
    flexDirection="column"
    p={['15px', '20px', '30px']}
    alignItems="center"
    textAlign="center"
  >
    <h1>Les gardiens de ta réussite</h1>
    <h2 className="yellow">
      Des spécialistes convaincus que le freelancing est le meilleur statut
    </h2>
    <Box
      width="100%"
      justifyContent="space-around"
      mt="40px"
      flexWrap="wrap"
      textAlign="center"
    >
      <Team name="Vincenzo" photo={vince} metier="Coach gestion et Biness" />
      <Team
        name="Alexandre"
        photo={alex}
        metier="Coach administratif et financier"
      />
      <Team
        name="Maxime"
        photo={alex}
        metier="Conseillier professionnel et parimonianal"
      />
      <Team name="Clememt" photo={clement} metier="Agent assureur Axa" />
      <Team name="Fredédric" photo={alex} metier="Expert Comptable" />
    </Box>
  </Box>
)

export default Teams
