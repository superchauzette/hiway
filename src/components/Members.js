import React from 'react'
import { Box, Text } from '../components'
import user from '../assets/user.png'
import Alexandre from '../assets/Alexandre.jpeg'
import Antoine from '../assets/Antoine.jpeg'
import Charly from '../assets/Charly.jpeg'
import Christopher from '../assets/Christopher.jpeg'
import Hedi from '../assets/Hedi.jpeg'
import Kevin from '../assets/Kevin.jpeg'
import Matthieu from '../assets/Matthieu.jpeg'
import Raphael from '../assets/Raphael.jpeg'
import Rémi from '../assets/Rémi.jpeg'
import Robin from '../assets/Robin.jpeg'
import Souheil from '../assets/souheil.png'
import Ghislain from '../assets/Ghislain.jpeg'

const Member = ({ name, metier, formation, src, temoignage }) => (
  <Box
    position="relative"
    flexDirection="column"
    mb="20px"
    bg="white"
    width={['100%', '300px', '320px']}
  >
    <Box justifyContent="space-around">
      <img src={src} alt={name} height="150px" className="picture" />
    </Box>
    <Box>
      <Box flexDirection="column" p="10px" width="100%" m="0">
        <Text m={0}>{name}</Text>
        <Text m={0} color="yellow">
          {metier}
        </Text>
        <Text m={0} color="yellow">
          {formation}
        </Text>
      </Box>
    </Box>

    <Text color="black" textAlign="center" pt="10px">
      &ldquo;{temoignage}&rdquo;
    </Text>
  </Box>
)

const Members = () => (
  <Box
    bg="white"
    flexDirection="column"
    p="30px"
    alignItems="center"
    textAlign="center"
  >
    <h1>Ils ont bien fait</h1>
    <h2 className="yellow">
      100% des développeurs devenus freelance avec Hiway ont recommandé un ami
    </h2>
    <Box
      flexDirection="flex"
      textAlign="center"
      width="100%"
      justifyContent="space-around"
      mt="40px"
      flexWrap="wrap"
      style={{ maxWidth: '1400px' }}
    >
      <Member
        name="Ghislain"
        src={Ghislain}
        metier="Dev IOS"
        formation="ESGI 2015"
        temoignage="J'étais pas rassuré mais j'avais envie de devenir Freelance. Hiway m'a permis de passer le cap"
      />
      <Member
        name="Robin"
        src={Robin}
        metier="Lead Dev PHP Symfony"
        formation="ETNA 2015"
        temoignage="Hiway m'a appris à devenir un vrai chef d'entreprise"
      />
      <Member
        name="Charly"
        src={Charly}
        metier="Dev PHP Symphony"
        formation="EPITECH 2014"
        temoignage="Je ne me serais jamais lancé sans eux. Aujourd'hui, je recommande Hiway à tous mes amis"
      />
      <Member
        name="Alexandre"
        src={Alexandre}
        metier=" Lead Dev Front"
        formation="Gobelins 2014"
        temoignage="Hiway m'a conseillé sur le meilleur statut et s'est chargé de toutes les démarches de création de ma société"
      />
      <Member
        name="Kevin"
        src={Kevin}
        metier="Kevin - Dev React.js"
        formation="ISTY 2012"
        temoignage="Trop d'inconnu sur comment devenir freelance, Hiway m'a éclairé et accompagné sur le chemin de ma réussite"
      />
      <Member
        name="Souheil"
        src={Souheil}
        metier="Lead Dev Java"
        formation="UPMC 2012"
        temoignage="Je suis devenu Freelance en toute sérénité grâce à Hiway"
      />

      <Member
        name="Remi"
        src={Rémi}
        metier="Dev PHP"
        formation="EPITECH 2013"
        temoignage="Des ateliers de coaching clairs, de l'expertise, de la disponibilité/flexibilité et du suivi au top"
      />

      <Member
        name="Antoine"
        src={Antoine}
        metier="Dev React.js"
        formation="IUT Paris 2012"
        temoignage="Leur suivi est vraiment complet et ils sont toujours là pour répondre à toutes les questions qu'un nouveau freelance peut se poser"
      />

      <Member
        name="Matthieu"
        src={Matthieu}
        metier="Dev React.js"
        formation="ESIAL 2011"
        temoignage="Un seul RDV avec Hiway, via une recommandation, m'a décidé à me lancer dans le freelancing"
      />

      <Member
        name="Raphaël"
        src={Raphael}
        metier="Dev React.js"
        formation="ETNA 2015"
        temoignage="Hiway, m'a donné toutes les clés pour trouver rapidement ma première mission et ils m'ont également fourni le modèle du contrat"
      />

      <Member
        name="Christopher"
        src={Christopher}
        metier="Lead Dev Mobile"
        formation="EEPITA 2012"
        temoignage="Avec Hiway, je connais, mois après mois, le montant optimal de ma rémunération"
      />
      <Member
        name="Hedi"
        src={Hedi}
        metier="Dev IOS"
        formation="ESPRIT 2012"
        temoignage="J'avais jamais entendu parlé d'optimisation financière, maintenant je l'applique au quotidien"
      />
    </Box>
  </Box>
)

export default Members
