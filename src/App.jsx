import './App.css'
import './Components/Navbar/NavbarCustom.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarCustom } from './Components'
import { About, Skills } from './Sections';



function App() {

  return (
    <>
    <NavbarCustom/>
    <About/>
    <Skills/>
    </>
  )
}

export default App
