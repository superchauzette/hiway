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
    <h2>
      Des spécialistes convaincus que le freelancing est le meilleur statut
    </h2>
    <Box
      width="100%"
      justifyContent="space-around"
      mt="40px"
      flexWrap="wrap"
      textAlign="center"
    >
      <Team name="Vince" photo={vince} metier="Coach" />
      <Team name="Alex" photo={alex} metier="Coach" />
      <Team name="Max" photo={alex} metier="Banquier" />
      <Team name="Clem" photo={clement} metier="Assureur" />
      <Team name="Fred" photo={alex} metier="Comptable" />
    </Box>
  </Box>
)

export default Teams
