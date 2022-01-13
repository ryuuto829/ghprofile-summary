import NextHead from 'next/head'
import PropTypes from 'prop-types'
import settings from '../settings'

const Head = ({ title, description }) => (
  <NextHead>
    <title>
      {title ? `${title} | ${settings.defaultTitle}` : settings.defaultTitle}
    </title>
    <meta
      name="description"
      content={description || settings.defaultDescription}
    />
    <meta name="keywords" content={settings.keywords} />
    <meta name="theme-color" content={settings.themeColor} />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicons/site.webmanifest" />

    <meta property="og:title" content={title || settings.defaultTitle} />
    <meta
      property="og:description"
      content={description || settings.defaultDescription}
    />
    <meta property="og:image" content={settings.ogImage} />
    <meta property="og:image:width" content={settings.ogWidth} />
    <meta property="og:image:height" content={settings.ogHeight} />
    <meta property="og:url" content={settings.ogURL} />

    <meta name="twitter:title" content={title || settings.defaultTitle} />
    <meta
      name="twitter:description"
      content={description || settings.defaultDescription}
    />
    <meta name="twitter:creator" content={settings.twitter} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={settings.ogImage} />
    <meta name="twitter:site" content={settings.ogURL}/>
  </NextHead>
)

export default Head

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
