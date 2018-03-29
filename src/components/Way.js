import React from 'react'
import { Box, Text } from '../components'

const Way = () => (
  <Box
    flexDirection="column"
    p={['15px', '22.5px', '30px']}
    alignItems="center"
    className="way"
    textAlign="center"
  >
    <h1>2 voies pour devenir un chef d’entreprise</h1>

    <Box justifyContent="space-around">
      <CoachingFreelancing />
      <FreanLanceAsService />
    </Box>
  </Box>
)

const Title = ({ title, sousTitle }) => (
  <Box bg="blue">
    <Box flexDirection="column" textAlign="center" p="30px">
      <h2 style={{ color: 'white' }}>{title}</h2>
      <p style={{ color: 'white' }}>{sousTitle}</p>
    </Box>
  </Box>
)

const CoachingFreelancing = () => (
  <Box width="45%" className="card" flexDirection="column">
    <Title
      title="Coaching"
      sousTitle="Devient un chef d’entreprise autonome en apprenant pendant un an avec des coachs à tes côtés"
    />
    <Box flexDirection="column">
      <Box bg="gray">
        <Learn />
      </Box>
      <Understand />
    </Box>
  </Box>
)

const FreanLanceAsService = () => (
  <Box width="45%" flexDirection="column" className="card">
    <Box bg="blue">
      <Box flexDirection="column" textAlign="center" p="30px">
        <h2 style={{ color: 'white' }}>Freelancing as a Service</h2>
        <p style={{ color: 'white' }}>
          Devient un chef d’entreprise libéré en confiant la gestion
          administrative aux spécialistes Hiway
        </p>
      </Box>
    </Box>
    <Box flexDirection="column" px={[0, 0, '30px']}>
      <Box mb={['225px']}>
        <Manage />
      </Box>
      <Delegate />
    </Box>
  </Box>
)
const Learn = () => (
  <Box flexDirection="column" p={'20px'} px={[0, 0, '30px']}>
    <Box flexDirection="column" textAlign="center">
      <h2>Apprendre</h2>
      <p>
        Un parcours d’apprentissage pragmatique pour devenir un parfait chef
        d’entreprise en 1 an :
      </p>
    </Box>

    <Box flexDirection="column">
      <p style={{ textAlign: 'left' }}>
        <b>
          13 ateliers de coaching délivrés par les spécialistes Hiway de la
          gestion d’entreprise sur les thémes suivants :
        </b>
      </p>
      <ul style={{ textAlign: 'left' }}>
        <li>Se lancer et créer sa société dans les meilleures conditions</li>
        <li> S’entourer de partenaires de confiance</li>
        <li> Trouver sa 1ère mission</li>
        <li> Gérer son entreprise efficacement</li>
        <li> Optimiser sa fiscalité et maximiser sa rémunération</li>
        <li>Faire son bilan</li>
      </ul>
    </Box>

    <Box flexDirection="column">
      <p style={{ textAlign: 'left' }}>
        <b>
          Un format centré sur l’humain qui associe le travail à des moments de
          partage agréables
        </b>
      </p>
      <ul style={{ textAlign: 'left' }}>
        <li>Ateliers individuels et personnalisés</li>
        <li> Toujours en présentiel</li>
        <li> Lieux de rencontre sympas et proches de toi</li>
        <li> Agenda adapté au tien </li>
        <li> Événements au sein de la Communauté Hiway </li>
      </ul>
    </Box>
  </Box>
)

const Understand = () => (
  <Box flexDirection="column" p={'20px'}>
    <Box flexDirection="column" textAlign="center">
      <h2>Comprendre</h2>
      <p>
        Un accompagnent pour réussir ton démarrage dans le freelancing et une
        formation centrée sur les principes essentiels de la gestion d’une
        entreprise :
      </p>
    </Box>

    <p style={{ textAlign: 'left' }}>
      <b>2 bootcamps d’une journée sur les thèmes suivants :</b>
    </p>
    <ul style={{ textAlign: 'left' }}>
      <li>Création de la société</li>
      <li> Trouver sa 1ère mission</li>
      <li> Comprendre les principes de gestion et d’optimisation</li>
    </ul>

    <p style={{ textAlign: 'left' }}>
      <b>Toute l’équipe Hiway à ta disposition :</b>
    </p>
    <ul style={{ textAlign: 'left' }}>
      <li>Bootcamps individuels et personnalisés</li>
      <li> Support permament sur tous les sujets</li>
      <li>
        Présentation des partenaires : expert-comptable, banque, assurance /
        protection sociale
      </li>
      <li> Rencontres à ta demande </li>
      <li> Événements au sein de la Communauté Hiway </li>
    </ul>
  </Box>
)

const Manage = () => (
  <Box flexDirection="column" p="20px" width="580px" textAlign="center">
    <h2>Gérer</h2>
    <p>
      Des outils faciles, des méthodologies efficaces et un support permanent de
      spécialistes pour que tu gères ton entreprise sereinement
    </p>

    <p style={{ textAlign: 'left' }}>
      <b>La gestion de mon entreprise sans erreur avec :</b>
    </p>
    <ul style={{ textAlign: 'left' }}>
      <li>Environnement de gestion collaboratif</li>
      <li> Outil de pilotage financier</li>
      <li> Édition de facture</li>
      <li> Calcul automatisé de la rémunération optimale</li>
      <li> Calcul des provisions fiscales et sociales</li>
      <li>Tous les templates de documents nécessaires</li>
      <li>
        Support permament de l’équipe Hiway : tes coachs, ton expert-comptable,
        ton assureur, ton banquier, ton avocat
      </li>
    </ul>
  </Box>
)

const Delegate = () => (
  <Box flexDirection="column" p="30px" width="580px" textAlign="center">
    <h2>Déléguer</h2>
    <p>
      En confiant la gestion administrative de ta société à Hiway, tu décides de
      te libérer des contraintes quotidiennes d’un chef d’entreprise et tu te
      concentres uniquement sur ton métier. Bien sur, tu restes le patron !
    </p>
    <p style={{ textAlign: 'left' }}>
      <b>
        Hiway révolutionne l’entrepreneuriat en créant la le « Freelancing as a
        Service » :
      </b>
    </p>

    <ul style={{ textAlign: 'left' }}>
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
        Gestion de tous les partenaires : expert-comptable, banque, assurance /
        protection sociale, organismes sociaux, administration fiscale, clients,
        fournisseurs
      </li>
      <li> Reporting de gestion réguliers </li>
    </ul>
  </Box>
)

export default Way
