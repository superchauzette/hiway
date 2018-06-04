import React from 'react'
import { Box } from '../components'
import rocket from '../assets/rocket.png'
import coffee from '../assets/coffee.png'

const Formation = () => (
  <Box bg="gray" width="100%" py={40} alignItems="center" flexDirection="column">

    <h1 style={{ textAlign: 'center' }}> Une formation pour devenir un bon chef d’entreprise </h1>

    <Box justifyContent="space-around" width="100%" flexWrap="wrap">

      <Box flexDirection="column" width="550px">
        <Box justifyContent="center" mb="20px">
          <Box width="100px" >
            <img src={coffee} width="100%" height="100%" />
          </Box>
        </Box>
        <h2 style={{ textAlign: 'center' }} className="yellow">Format</h2>
        <Box justifyContent="center">
          <ul className="FreanLanceAsService">
            <li > Un parcours d’apprentissage en 13 ateliers </li>
            <li >100% individualisé</li>
            <li >100% en présentiel</li>
            <li >Des rdv où tu veux</li>
            <li >Un agenda adapté à tes disponibilités</li>
            <li >Dans des cadres de travail agréables</li>
          </ul>
        </Box>
      </Box>

      <Box flexDirection="column" width="550px">
        <Box justifyContent="center" mb="20px">
          <Box width="100px" >
            <img src={rocket} width="100%" height="100%" />
          </Box>
        </Box>
        <h2 style={{ textAlign: 'center' }} className="yellow">Parcours</h2>
        <Box justifyContent="center">
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
  </Box >
)

export default Formation
