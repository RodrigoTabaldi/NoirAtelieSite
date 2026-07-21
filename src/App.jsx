import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Prices from './components/Prices'
import Team from './components/Team'
import Quotes from './components/Quotes'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Pular para conteúdo</a>
      <Header />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Prices />
        <Team />
        <Quotes />
        <Booking />
      </main>
      <Footer />
    </>
  )
}
