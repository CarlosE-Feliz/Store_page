import MainHeader from '../components/layout/main-header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
