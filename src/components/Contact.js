import React from 'react'
import { Box, Heading1 } from '../components'

const data = {
  title: "Envie de te lancer ? Parlons-en autour d'un café",
  btnLabel: 'Envoyer',
}

export const Contact = () => (
  <Box bg="gray" width="100%" justifyContent="center">
    <Box flexDirection="column" alignItem="center" py="30px">
      <Heading1>{data.title}</Heading1>
      <Box bg="gray" width="100%" justifyContent="center">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          style={{ width: '500px' }}
        >
          <Box flexDirection="column" alignItem="center">
            <Box mb="10px" width="100%">
              <input
                type="text"
                name="name"
                autoComplete="name"
                style={{ width: '100%' }}
                placeholder="Nom Prénom"
              />
            </Box>
            <Box mb="10px" width="100%">
              <input
                style={{ width: '100%' }}
                type="text"
                name="phone"
                autoComplete="phone"
                placeholder="Téléphone"
              />
            </Box>
            <Box mb="25px" width="100%">
              <input
                style={{ width: '100%' }}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
              />
            </Box>
            <textarea
              style={{ width: '100%', height: '165px' }}
              type=""
              name="message"
              placeholder="Message"
            />
          </Box>
          <Box mt="15px" width="100%">
            <button type="submit">{data.btnLabel}</button>
          </Box>
        </form>
      </Box>
    </Box>
  </Box>
)
