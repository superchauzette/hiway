import React from 'react'
import { Box, Text, Heading1, Heading2, Heading3 } from '.'
import { Fade } from 'react-reveal'

const data = {
  title: "L'ADN d'Hiway",
  subtitle:
    'Hiway est la solution qui rassemble tout ce dont tu as besoin pour te lancer et réussir dans le freelancing',
  engagements: [
    {
      title: 'À chaque étape',
      text:
        'intègre un parcours qui couvre toutes les étapes clés de ton projet',
    },
    {
      title: 'Sur tous les sujets',
      text:
        'deviens un chef d’entreprise formé sur tous les domaines de l’entrepreneuriat',
    },
    {
      title: '100% humain',
      text:
        'bénéficie d’un accompagnement individualisé et personnalisé, où tu veux et quand tu veux',
    },
    {
      title: 'Support permanent',
      text: 'mobilise autant que tu veux une équipe à ton service 24/7',
    },
    {
      title: 'Réussite assurée',
      text:
        'prend les meilleures décisions, gère sans stress, maximise tes revenus',
    },
    {
      title: 'Communauté de freelances',
      text:
        'rejoins une communauté de freelances tech (conf, meetups, soirées)',
    },
  ],
}

export function MissionHiway() {
  return (
    <Box
      p="30px"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      bg="blue"
    >
      <Heading1 color="white">{data.title}</Heading1>
      <Heading2 color="yellow" width={['100%', '70%']}>
        {data.subtitle}
      </Heading2>

      <Box flexDirection="column" textAlign="center" width="90%">
        <Box justifyContent="space-around" mt="60px" flexWrap="wrap">
          {data.engagements
            .filter((_, index) => index < 3)
            .map(engagement => (
              <Engagement title={engagement.title} text={engagement.text} />
            ))}
        </Box>
        <Box justifyContent="space-around" mt="20px" flexWrap="wrap">
          {data.engagements
            .filter((_, index) => index >= 3)
            .map(engagement => (
              <Engagement title={engagement.title} text={engagement.text} />
            ))}
        </Box>
      </Box>
    </Box>
  )
}

function Engagement({ title, text }) {
  return (
    <Fade>
      <Box
        width="260px"
        height="185px"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Box mb="10px">
          <img src="https://res.cloudinary.com/hopwork/image/upload/v1508844479/home-malt/check.svg" />
        </Box>
        <Heading3 color="yellow" mb="5px">
          {title}
        </Heading3>
        <Text textAlign="left" color="white">
          {text}
        </Text>
      </Box>
    </Fade>
  )
}
