import NextHead from 'next/head'
import PropTypes from 'prop-types'

export default function Head({ title, description }) {
  const DEFAULT_TITLE = 'GHProfile Summary'
  const DEFAULT_DESCRIPTION = 'Find your GitHub profile and look it\'s summary with charts'

  return (
    <NextHead>
      <title>{`${title} | ${DEFAULT_TITLE}` || DEFAULT_TITLE}</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <meta name="keywords" content="GitHub, nextjs, chart.js" />

      <meta name="theme-color" content="#031218" />

      <meta property="og:title" content={title || DEFAULT_TITLE} />
      <meta
        property="og:description"
        content={description || DEFAULT_DESCRIPTION} />
      {/* TODO: Add image and url */}
      <meta property="og:image" content="" />
      <meta property="og:image:width" content="" />
      <meta property="og:image:height" content="" />
      <meta property="og:url" content="" />

      <meta name="twitter:title" content={title || DEFAULT_TITLE} />
      <meta
        name="twitter:description"
        content={description || DEFAULT_DESCRIPTION} />
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
