import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: '€ T-LAB WEB SHOP $',
  description: 'T-LAB WEB SHOP',
  keywords: 'Best shoping place in the world',
}

export default Meta
