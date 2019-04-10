import React from 'react'
import { Box, Heading1, Heading3, Text } from '.'

const stepsData = [
  {
    title: 'Création de la société',
    items: [
      {
        title: 'Choix de la forme juridique et rédaction des statuts',
        description:
          'Analyse de toutes les possibilités en matière juridique, fiscale, sociale ainsi que leur impact sur la rémunération et préconisation du statut juridique le plus intéressant',
      },
      {
        title: 'Constitution du dossier d’immatriculation',
        description:
          'Formulaires obligatoires, attestation de dépôt du capital social, annonce légale, contrat de domiciliation du siège social',
      },
      {
        title: 'Immatriculation et obtention du Kbis',
        description:
          'Immatriculation auprès du Greffe du Tribunal de Commerce et obtention du Kbis en 48h',
      },
    ],
  },
  {
    title: 'Mise en relation avec les partenaires Hiway',
    items: [
      {
        title: 'BNP Paribas',
        description:
          'Dépôt de capital social, ouverture du compte bancaire professionnel, services bancaires, solutions d’avance de trésorerie, financement de projets patrimoniaux',
      },
      {
        title: 'AXA',
        description:
          'Contrat d’assurance de responsabilité civile professionnelle et obtention de l’attestation en 48h. Protection sociale personnalisée (mutuelle, prévoyance, retraite)',
      },
    ],
  },
  {
    title: 'Coaching commercial',
    items: [
      {
        title: 'Recherche de missions',
        description:
          'Profil value, CV, mise en visibilité, préparation aux entretiens, suivi des opportunités',
      },
      {
        title: 'Négociation & contractualisation',
        description:
          'Définition du tarif, négociation, étude des contrats clients, templates (devis, contrats, etc.)',
      },
      {
        title: 'Proposition de missions',
        description:
          'Mise en relation directe avec des clients finaux, partenariats avec des plateformes de freelances et ESN, cooptation entre freelances de la communauté Hiway',
      },
    ],
  },
  {
    title: 'Formation en gestion d’entreprise',
    items: [
      {
        title: 'Gestion commerciale',
        description:
          'Règles commerciales, contractualisation, suivi des contrats, facturation, suivi des paiements, gestion de la relation client',
      },
      {
        title: 'Gestion des dépenses',
        description:
          'Règles, formalisme, classement, comptabilisation, gestion de trésorerie.	Achat de matériel, frais de repas, déplacements, dépenses courantes',
      },
      {
        title: 'Gestion fiscale et sociale',
        description:
          'Règles, taux, calendrier, process. TVA, Impôt sur les sociétés, Cotisation Foncière des Entreprises, SSI, URSSAF, CIPAV',
      },
    ],
  },
  {
    title: 'Formation en stratégie financière',
    items: [
      {
        title: 'Règles comptables et financières',
        description: 'Produits, charges, amortissements, rentabilité',
      },
      {
        title: 'Rémunération du dirigeant',
        description: 'Calcul, optimisation, déclaration',
      },
      {
        title: 'Sécurisation de la trésorerie',
        description:
          'Gestion des variations d’activité, anticipation de la fiscalité et des cotisations sociales',
      },
    ],
  },
  {
    title:
      'Comptabilité: Partenariat avec un cabinet d’expertise-comptable intégré dans l’accompagnement Hiway',
    items: [
      {
        title: 'Conseil personnalisé et validation des opérations comptables',
        description: '',
      },
      {
        title: 'Bilan et liasse fiscale',
        description: '',
      },
      {
        title: 'Assemblée générale et dépôt des comptes',
        description: '',
      },
    ],
  },
  {
    title: 'Préparation de l’avenir',
    items: [
      {
        title:
          'Accompagnement par un gestionnaire de patrimoine partenaire d’Hiway',
        description: '',
      },
      {
        title:
          'Définition d’une stratégie personnalisée d’investissements et de placements',
        description: '',
      },
      {
        title:
          'Conseil et mise en place des montages juridiques, fiscaux et financierss',
        description: '',
      },
    ],
  },
]

const Step = ({ title, items }) => (
  <Box mb="25px" flexDirection="column">
    <Heading3 color="red" mb="10px">{`${title}`}</Heading3>
    <ul>
      {items.map(item => (
        <li>
          <Text mb="3px" style={{ fontWeight: 'bold' }}>
            {item.title}
          </Text>
          <Text mb="7px">{item.description}</Text>
        </li>
      ))}
    </ul>
  </Box>
)

export const Parcours = () => (
  <Box
    p="30px"
    flexDirection="column"
    alignItems="center"
    style={{ position: 'relative' }}
    bg="white"
  >
    <Box width="80%" flexDirection="column">
      <Heading1>Parcours</Heading1>
      <Box flexDirection="column" width="80%" mt="30px">
        {stepsData.map((step, index) => <Step {...step} />)}
      </Box>
    </Box>
  </Box>
)

export default Parcours
