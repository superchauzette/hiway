import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

import './index.css'
import './custom.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Hiway"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Roboto',
          rel: 'stylesheet',
        },
      ]}
    />
    <ThemeProvider theme={theme}>{children()}</ThemeProvider>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
