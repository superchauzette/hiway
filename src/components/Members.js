import React from 'react'
import { Box, Text } from '../components'
import kev from '../assets/kev.jpg'

const Member = ({ name, metier }) => (
  <Box
    position="relative"
    flexDirection="column"
    mb="20px"
    style={{
      backgroundColor: 'white',

      // boxShadow:
      //   '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    }}
  >
    <div
      style={{
        overflow: 'hidden',
        width: '180px',
        height: '200px',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <img
        src={
          'https://www.britishcurlies.co.uk/wp-content/uploads/2014/01/7094742_m.jpg'
        }
        alt=""
        height="200px"
      />
    </div>
    <div
      style={{
        bottom: '-40px',
        height: '60px',

        width: '100%',
      }}
    >
      <p>
        {name}
        <br />
        {metier}
      </p>
    </div>
  </Box>
)

const Members = () => (
  <Box
    bg="gray"
    flexDirection="column"
    p="30px"
    alignItems="center"
    textAlign="center"
  >
    <h1>Ils ont bien fait</h1>
    <h2>
      100% des développeurs devenus freelance avec Hiway ont recommandé un ami
    </h2>
    <Box
      flexDirection="flex"
      textAlign="center"
      width="100%"
      justifyContent="space-around"
      mt="40px"
      flexWrap="wrap"
    >
      <Member name="Me" metier="Dev PHP" />
      <Member name="Me" metier="Dev Android" />
      <Member name="Me" metier="Dev JS" />
      <Member name="Me" metier="Dev PHP" />
      <Member name="Me" metier="Dev Mobile" />
      <Member name="Me" metier="Dev Mobile" />
    </Box>
  </Box>
)

export default Members
