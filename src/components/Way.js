import React from 'react'
import { Box, Text } from '../components'

const Way = () => (
  <Box
    bg="gray"
    p={['15px', '22.5px', '30px']}
    flexDirection="column"
    alignItems="center"
    className="way"
    textAlign="center"
    width="100%"
  >
    <h1>2 voies pour devenir un chef d’entreprise</h1>
    <Box width="100%" justifyContent="space-around" flexWrap="wrap">
      <CoachingFreelancing />
      <FreanLanceAsService />
    </Box>
  </Box>
)

const Title = ({ bg, title, title2 = () => null, sousTitle }) => (
  <Box bg={bg}>
    <Box
      flexDirection="column"
      textAlign="center"
      p="30px"
      pb="0px"
      width="100%"
    >
      <h2 style={{ color: 'white', textTransform: 'uppercase' }}>{title}</h2>
      <h3 style={{ color: 'white' }}>{sousTitle}</h3>
      {title2()}
    </Box>
  </Box>
)

const CoachingFreelancing = () => (
  <Box
    width={['100%', '46%', '46%']}
    mb={['30px', 0, 0]}
    flexDirection="column"
    className="card CoachingFreelancing"
  >
    <Title
      bg="yellow"
      title="Coaching"
      sousTitle="Apprendre & Gérer"
      title2={() => (
        <Text color="white" textAlign="center" fontWeight="bold" p={'20px'}>
          Devient un chef d’entreprise autonome en apprenant pendant un an avec
          des coachs à tes côtés<br /> <br />
        </Text>
      )}
    />

    <Box flexDirection="column">
      <Box flexDirection="column" bg="gray" p={'20px'}>
        <Text color="yellow" textAlign="center" fontWeight="bold">
          PARCOURS
        </Text>
        <ul style={{ textAlign: 'left' }}>
          <li>Se lancer et créer sa société dans les meilleures conditions</li>
          <li> S’entourer de partenaires de confiance</li>
          <li> Trouver sa 1ère mission</li>
          <li> Gérer son entreprise efficacement et sans erreur</li>
          <li> Optimiser sa fiscalité et maximiser sa rémunération</li>
          <li>Faire son bilan</li>
        </ul>
      </Box>

      <Box flexDirection="column" p={'20px'}>
        <Text color="yellow" textAlign="center" fontWeight="bold">
          FORMAT
        </Text>
        <ul style={{ textAlign: 'left' }}>
          <li>
            Un parcours d’apprentissage en 13 ateliers pendant 1 an <br />
          </li>

          <li> 100% en individuel et en présentiel</li>
          <li> Des rdv où et quand tu veux et dans des cadres agréables</li>
          <li> Des outils faciles, une méthodologie efficace </li>
          <li> Un support permanent de spécialistes </li>
        </ul>
      </Box>
    </Box>
  </Box>
)

const FreanLanceAsService = () => (
  <Box
    width={['100%', '46%', '46%']}
    flexDirection="column"
    className="card FreanLanceAsService"
  >
    <Title
      bg="blue"
      title="Freelancing as a Service"
      sousTitle="Comprendre & Déléguer"
      title2={() => (
        <Text color="white" textAlign="center" fontWeight="bold" p="20px">
          Une approche révolutionnaire du Freelancing : <br />Devient un chef
          d’entreprise libéré en confiant la totalité de la gestion
          administrative de ta société
        </Text>
      )}
    />
    <Box flexDirection="column">
      <Box bg="gray" flexDirection="column" textAlign="left" p="20px">
        <Text color="blue" textAlign="center" fontWeight="bold">
          DELEGATION TOTALE
        </Text>
        <ul>
          <li>Envoi de tes factures, suivi des règlements et relances</li>
          <li>
            Réception, traitement et classement de tous les documents de ton
            entreprise
          </li>
          <li> Suivi de tes obligations fiscales et sociales</li>
          <li> Calcul de ta rémunération optimisée et exécution du virement</li>
          <li>
            Gestion des relations avec l’administration, les partenaires, le
            comptable
          </li>
          <li style={{ opacity: 0 }} />
        </ul>
      </Box>

      <Box flexDirection="column" textAlign="left" p="20px">
        <Text color="blue" textAlign="center" fontWeight="bold">
          FORMAT
        </Text>

        <ul>
          <li>
            2 Bootcamps personnalisés pour se former sur les sujets
            indispensables du freelancing :
          </li>
          <li style={{ listStyle: 'square', marginLeft: '40px' }}>
            #1: Créer sa société et trouver sa 1ère mission
          </li>
          <li style={{ listStyle: 'square', marginLeft: '40px' }}>
            #2 : S’initier à la gestion d’entreprise et à l’optimisation
            financière
          </li>

          <li> Support permanent sur tous les sujets 24/24 7/7</li>
          <li>Reportings réguliers et transparents de ton activité</li>
        </ul>
      </Box>
    </Box>
  </Box>
)

export default Way
