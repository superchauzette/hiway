import React from 'react'
import { Box } from '../components'

const Formation = () => (
  <Box bg="gray" width="100%" py={40} alignItems="center" flexDirection="column">

    <h1> Une formation pour devenir un bon chef d’entreprise </h1>

    <Box justifyContent="space-around" width="100%" >

      <Box flexDirection="column">
        <h2 style={{ textAlign: 'center' }} className="yellow">Format</h2>
        <ul className="FreanLanceAsService">
          <li > Un parcours d’apprentissage en 13 ateliers </li>
          <li >100% individualisé</li>
          <li >100% en présentiel</li>
          <li >Des rdv où tu veux</li>
          <li >Un agenda adapté à tes disponibilités</li>
          <li >Dans des cadres de travail agréables</li>
        </ul>
      </Box>

      <Box flexDirection="column">
        <h2 style={{ textAlign: 'center' }} className="yellow">Parcour</h2>
        <ul className="FreanLanceAsService">
          <li >Se lancer, choisir le statut le plus pertinent et créer sa société</li>
          <li >Mettre en place une protection sociale sur mesure</li>
          <li >Trouver sa mission rapidement et contractualiser dans les meilleures conditions</li>
          <li >Gérer son entreprise efficacement et sans erreur</li>
          <li >Optimiser sa fiscalité et maximiser sa rémunération</li>
          <li >Faire son bilan comptable</li>
          <li >Préparer l’avenir et construire son patrimoine</li>
        </ul>
      </Box>

    </Box>
  </Box>
)

export default Formation
