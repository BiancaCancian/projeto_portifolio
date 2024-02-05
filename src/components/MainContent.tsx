import '../styles/components/maincontent.sass'
import AboutConteiner from './AboutConteiner'
import Projetos from './Projetos'
import Tecnologias from './Tecnologias'

const MainContent = () => {
  return ( <main id='main-content'>
    <AboutConteiner/>
    <Tecnologias/>
    <Projetos/>
  </main>
  )
}

export default MainContent
