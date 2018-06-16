import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import theme from './theme'

import './custom.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      htmlAttributes={{ lang: 'fr' }}
      title="Hiway"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        { name: 'theme-color', content: 'rgb(248,210,101)' },
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
