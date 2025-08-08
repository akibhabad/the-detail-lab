import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Analytics } from '@vercel/analytics/next'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17449616964"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17449616964');
            `,
          }}
        />
      </Head>
      <div className="App">
        <Navbar />
        <main>
          <Component {...pageProps} />
        </main>
        <Analytics />
      </div>
    </>
  )
}