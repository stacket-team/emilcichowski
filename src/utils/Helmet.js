import React from 'react'
import { Helmet as ReactHelmet, HelmetProvider } from 'react-helmet-async'

const Helmet = () => (
  <HelmetProvider>
    <ReactHelmet>
      <title>emilchowski - portfolio</title>
      <link rel="stylesheet" href="https://use.typekit.net/fik3aiu.css" />
    </ReactHelmet>
  </HelmetProvider>
)

export default Helmet
