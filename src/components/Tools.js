import React from 'react'
import { Box, Heading1 } from '../components'
import forum from '../assets/picto-forum.jpg'

const srcImg = name =>
  `https://res.cloudinary.com/kevin-even-io/image/upload/c_scale,w_auto,dpr_auto/hiway/${name}.png`
const nuage = srcImg('nuage')
const cash = srcImg('cash')
const documents = srcImg('document')

const Tool = ({ src, styleImg, children }) => (
  <Box flexDirection="column" alignItems="center" width="250px">
    <Box width="100px" {...styleImg}>
      <img
        src={src}
        width={(styleImg && styleImg.width) || '100px'}
        height="100%"
      />
    </Box>
    {children}
  </Box>
)

const Tools = () => (
  <Box
    width="100%"
    alignItems="center"
    py="40px"
    flexDirection="column"
    bg="white"
  >
    <Heading1 textAlign="center" px="10px">
      Des outils et un support permanent <br />pour gérer sereinement
    </Heading1>

    <Box flexDirection="column" width="100%">
      <Box justifyContent="space-around" width="100%" flexWrap="wrap">
        <Tool src={nuage}>
          <p style={{ textAlign: 'center' }}>
            Application web de gestion<br /> et de comptabilité
          </p>
        </Tool>

        <Tool src={cash}>
          <p style={{ textAlign: 'center' }}>
            Outil de calcul <br />de la rémunération
          </p>
        </Tool>

        <Tool
          src={documents}
          styleImg={{ width: '70px', mb: '20px', mt: '15px' }}
        >
          <p style={{ textAlign: 'center' }}>
            Tous les templates <br />de documents nécessaires
          </p>
        </Tool>

        <Box flexDirection="column" alignItems="center" width="250px">
          <img src={forum} width='100px' height="100px" />
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Support permanent <br />sur tous les sujets
          </p>
        </Box>

      </Box>
    </Box>
  </Box>
)

export default Tools
