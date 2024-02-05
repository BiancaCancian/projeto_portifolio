import Social from './Social'
import Avatar from '../img/bianquinha (1).png'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationConteiner'


const Sidebar = () => {
  return ( <aside id="sidebar">
      <img src={Avatar} alt="Bianca Cancian" />
      <p className="title">Desenvolvedora</p>
      <Social/>
      <InformationContainer />
      <a href="" className="btn">
        Downlond currículo
        </a>
  </aside>
  )
}

export default Sidebar
