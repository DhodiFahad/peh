import Navbar from '../components/navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className='container'>
  <Navbar/>
    <Component {...pageProps} />
    <div className="talk_section">
        <h3>Get The Size of Your Dreams Now!!!</h3>
        <a href="https://wa.me/%2B256705183414">Talk To Us Via Whatsapp</a>
      </div>
  </div>


}

export default MyApp
