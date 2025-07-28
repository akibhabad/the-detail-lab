import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Analytics } from '@vercel/analytics/next'

export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </div>
  )
}