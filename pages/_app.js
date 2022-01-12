import { AppWrapper } from '../hooks'
import '../styles/globals.scss'
import '../styles/design_tokens.scss'

const MyApp = ({ Component, pageProps }) => (
  <AppWrapper>
    <Component {...pageProps} />
  </AppWrapper>
)

export default MyApp

// Use page props to provide username id query
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  // Provide queries to all pages
  pageProps.query = ctx.query
  return { pageProps }
}
