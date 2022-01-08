import '../styles/globals.scss'
import '../styles/design_tokens.scss'
import { AppWrapper } from '../hooks'

export default function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  // Provide queries to all pages
  pageProps.query = ctx.query
  return { pageProps }
}
