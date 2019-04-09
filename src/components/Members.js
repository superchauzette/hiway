import React from 'react'
import { Box, Text, Heading1, Heading2 } from '../components'
import Charley from '../assets/CharleyFROMAGE.jpg'
import NicolasV from '../assets/NicolasViry.jpg'
import NicolasR from '../assets/NicolasROSADO.jpg'
import AlexandreLANGUE from '../assets/AlexandreLANGUE.jpg'
import FrancoisBOULAIS from '../assets/FrancoisBOULAIS.jpg'

const srcImg = name =>
  `https://res.cloudinary.com/kevin-even-io/image/upload/c_scale,w_auto,dpr_auto/hiway/${name}.jpg`

const Ghislain = srcImg('Ghislain')
const Robin = srcImg('Robin')
const Hedi = srcImg('Hedi')
const Kevin = srcImg('Kevin')
const Christopher = srcImg('Christopher')
const Matthieu = srcImg('Matthieu')
const Alexandre = srcImg('Alexandre')
const Antoine = srcImg('Antoine')
const Charly = srcImg('Charly')
const Raphael = srcImg('Raphael')
const Rémi = srcImg('Rémi')
const Souheil = srcImg('Souheil')

const Member = ({ name, metier, formation, src, temoignage }) => (
  <Box
    position="relative"
    flexDirection="column"
    mb="20px"
    width={['100%', '300px', '320px']}
  >
    <Box justifyContent="space-around">
      <img
        src={src}
        alt={name}
        height="150px"
        width="150px"
        className="picture"
      />
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
    <Text textAlign="center">&ldquo;{temoignage}&rdquo;</Text>
  </Box>
)

const Members = () => (
  <Box
    bg="white"
    flexDirection="column"
    p={['5px', '30px', '30px']}
    pt="40px"
    alignItems="center"
    textAlign="center"
  >
    <Heading1>Une communauté de 100 freelances</Heading1>
    <Box px={[0, 150, 150]}>
      <Heading2 color="yellow">
        Ensemble, nous avons créé CLUSTER, la 1ère communauté collaborative et
        solidaire de développeurs et experts de la Tech freelances :{' '}
        <a
          target="_blank"
          href="http://www.cluster-freelance.io"
          style={{ whiteSpace: 'nowrap', color: '#5A5A5A' }}
        >
          www.cluster-freelance.io
        </a>
      </Heading2>
    </Box>
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
        metier="Dev Node.js / GO"
        formation="EPITECH 2015 "
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
        metier="Dev PHP Symfony"
        formation="EPITECH 2014"
        temoignage="Je ne me serais jamais lancé sans eux. Aujourd'hui, je recommande Hiway à tous mes amis"
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
        temoignage="Depuis le début de mon aventure freelance fin 2017, HIWAY est mon guide et mon filet de sécurité qui me laisse me concentrer sereinement sur ma mission"
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
        formation="EPITA 2012"
        temoignage="Avec Hiway, je connais, mois après mois, le montant optimal de ma rémunération"
      />
      <Member
        name="Hedi"
        src={Hedi}
        metier="Dev IOS"
        formation="ESPRIT 2012"
        temoignage="J'avais jamais entendu parlé d'optimisation financière, maintenant je l'applique au quotidien"
      />
      <Member
        name="Charley"
        src={Charley}
        metier="Dev IOS"
        formation="Polytech Nantes 2011"
        temoignage="Depuis Hiway, c'est moi et moi seul qui récolte tout les fruits de mon travail !"
      />
      <Member
        name="Nicolas V"
        src={
          'https://res.cloudinary.com/kevin-even-io/image/upload/c_crop,h_3648,w_3648/v1542660136/hiway/Nicolas_Viry.jpg'
        }
        metier="Dev Mobile"
        formation="Univ Toulon 2014"
        temoignage="Grâce à HIWAY, j’ai pu démarrer mon activité dans les meilleurs conditions et apprendre à gérer ma société sereinement"
      />
      <Member
        name="Alexandre"
        src={AlexandreLANGUE}
        metier="Scrum Master"
        formation="EPSI Arras 2012"
        temoignage="Grâce à Hiway, je suis passé de freelance junior à freelance confirmé en l'espace d'un mois. Hiway a changé la vision que j'avais du freelancing, je ne peux pas être mieux accompagné !"
      />
      <Member
        name="Nicolas R"
        src={NicolasR}
        metier="Dev Full-Stack"
        formation="PolyTech Tours 2013"
        temoignage="Hiway m’a permis de concrétiser mon envie d’entreprendre. Grâce à leur accompagnement je me suis lancé dans ce projet en toute confiance !"
      />
      <Member
        name="François"
        src={FrancoisBOULAIS}
        metier="Dev iOS"
        formation="ESIR 2014"
        temoignage="Une transition du salariat au freelancing on ne peut plus facile et agréable avec Hiway. La promesse est largement tenue"
      />
    </Box>
  </Box>
)

export default Members
