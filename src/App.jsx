
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import RouteController from './routes'
import Cards from './components/Cards'
import BigCard from './components/BigCard'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Nav/>
    <Hero/>
    <Cards/>
    <BigCard/>
    <Footer/>
     <RouteController/>
    </>
  )
}

export default App
