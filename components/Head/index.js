import NextHead from 'next/head'
import PropTypes from 'prop-types'
import settings from '../settings'

export default function Head({ title, description }) {
  return (
    <NextHead>
      <title>
        {title ? `${title} | ${settings.defaultTitle}` : settings.defaultTitle}
      </title>
      <meta
        name="description"
        content={description || settings.defaultDescription}
      />
      <meta name="keywords" content="GitHub, nextjs, chart.js" />

      <meta name="theme-color" content="#031218" />

      <meta property="og:title" content={title || settings.defaultTitle} />
      <meta
        property="og:description"
        content={description || settings.defaultDescription} />
      {/* TODO: Add image and url */}
      <meta property="og:image" content="" />
      <meta property="og:image:width" content="" />
      <meta property="og:image:height" content="" />
      <meta property="og:url" content="" />

      <meta name="twitter:title" content={title || settings.defaultTitle} />
      <meta
        name="twitter:description"
        content={description || settings.defaultDescription} />
      <meta name="twitter:creator" content={'@ryuuto829'} />
      <meta name="twitter:card" content="summary_large_image" />
      {/* TODO: Add image and url */}
      <meta name="twitter:image" content="" />
      <meta name="twitter:site" content=""/>
    </NextHead>
  )
}

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
