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

const Title = ({ bg, title, title2, sousTitle }) => (
  <Box bg={bg}>
    <Box flexDirection="column" textAlign="center" p="30px" width="100%">
      <h2 style={{ color: 'white' }}>{title}</h2>
      <h2 style={{ color: 'white' }}>{title2}</h2>
      <p style={{ color: 'white' }}>{sousTitle}</p>
    </Box>
  </Box>
)

const CoachingFreelancing = () => (
  <Box
    width={['100%', '45%', '45%']}
    mb="30px"
    flexDirection="column"
    className="card CoachingFreelancing"
  >
    <Title
      bg="yellow"
      title="Coaching"
      title2="Apprendre & gérer"
      sousTitle="Devient un chef d’entreprise autonome en apprenant pendant un an avec
        des coachs à tes côtés"
    />
    <Box flexDirection="column">
      <Learn />
    </Box>
  </Box>
)

const Learn = () => (
  <Box flexDirection="column" p={'20px'}>
    <Box flexDirection="column">
      <Text color="yellow" textAlign="left" fontWeight="bold">
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

    <Box flexDirection="column">
      <Text color="yellow" textAlign="left" fontWeight="bold">
        FORMAT
      </Text>
      <ul style={{ textAlign: 'left' }}>
        <li> Un parcours d’apprentissage en 13 ateliers pendant 1 an</li>
        <li> 100% en individuel et en présentiel</li>
        <li> Des rdv où et quand tu veux et dans des cadres agréables</li>
        <li> Des outils faciles, une méthodologie efficace </li>
        <li> Un support permanent de spécialistes </li>
      </ul>
    </Box>
  </Box>
)

const FreanLanceAsService = () => (
  <Box
    width={['100%', '45%', '45%']}
    flexDirection="column"
    className="card FreanLanceAsService"
  >
    <Title
      bg="blue"
      title="Freelancing as a Service"
      title2="Comprendre & Déléguer"
      sousTitle="Une approche révolutionnaire du Freelancing :
      Devient un chef d’entreprise libéré
      en confiant la totalité de la gestion administrative de ta société"
    />
    <Box flexDirection="column">
      <Manage />
    </Box>
  </Box>
)

const Manage = () => (
  <Box flexDirection="column" p="20px">
    <Text color="blue" textAlign="left" fontWeight="bold">
      DELEGATION TOTALE
    </Text>
    <Box flexDirection="column" textAlign="left">
      <ul>
        <li>
          Envoi de tes factures à tes clients, suivi des règlements et relances
        </li>
        <li>
          Réception, traitement et classement de tous les documents de ton
          entreprise
        </li>
        <li> Suivi de tes obligations fiscales et sociales</li>
        <li> Calcul de ta rémunération optimisée et exécution du virement</li>
        <li>
          Gestion des relations avec l’administration, les partenaires, le
          comptable et les clients
        </li>
      </ul>
    </Box>

    <Text color="blue" textAlign="left" fontWeight="bold">
      FORMAT
    </Text>
    <Box flexDirection="column" textAlign="left">
      <Text px="20px" textAlign="left" fontWeight="bold">
        2 Bootcamps personnalisés pour se former sur les sujets indispensables
        du freelancing :
      </Text>
      <ul>
        <li>#1: Créer sa société et trouver sa 1ère mission</li>
        <li>
          #2 : S’initier à la gestion d’entreprise et à l’optimisation
          financière
        </li>
      </ul>
      <ul>
        <li> Support permanent sur tous les sujets 24/24 7/7</li>
        <li>Reportings réguliers et transparents de ton activité</li>
      </ul>
    </Box>
  </Box>
)

const Delegate = () => (
  <Box flexDirection="column" p="20px">
    <Box flexDirection="column" textAlign="center">
      <h3 className="blue">Déléguer</h3>
      <Text>
        En confiant la gestion administrative de ta société à Hiway, tu décides
        de te libérer des contraintes quotidiennes d’un chef d’entreprise et tu
        te concentres uniquement sur ton métier. Bien sur, tu restes le patron !
      </Text>
    </Box>
    <Box flexDirection="column" textAlign="left">
      <Text fontWeight="bold">
        Hiway révolutionne l’entrepreneuriat en créant la le « Freelancing as a
        Service » :
      </Text>
    </Box>
    <Box flexDirection="column" textAlign="left">
      <ul>
        <li>Ce que tu fais : nous envoyer ton CRA</li>
        <li> Ce que Hiway fait pour toi :</li>
      </ul>
      <ul style={{ textAlign: 'left', paddingLeft: '30px' }}>
        <li>Gestion commerciale</li>
        <li> Gestion comptable</li>
        <li>Gestion administrative</li>
        <li> Gestion fiscale et sociale </li>
        <li> Optimisation et rémunération</li>
        <li> Bilan comptable</li>
        <li>
          Gestion de tous les partenaires : expert-comptable, banque, assurance
          / protection sociale, organismes sociaux, administration fiscale,
          clients, fournisseurs
        </li>
        <li> Reporting de gestion réguliers </li>
      </ul>
    </Box>
  </Box>
)

export default Way
