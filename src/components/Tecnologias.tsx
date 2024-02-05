import{
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiPython,
  DiJava,
  DiMysql,
  DiSass,
  DiReact,
  DiNodejs,
  DiBootstrap,
 
} from 'react-icons/di'

import '../styles/components/tecnologiascontainer.sass'

const tecnologias = [
  {id: "html", name: "HTML5", icon: <DiHtml5/>},
  {id: "css", name: "CSS3", icon: <DiCss3/>},
  {id: "javascrpit", name: "JavaScript", icon: <DiJavascript/>},
  {id: "python", name: "Python", icon: <DiPython/>},
  {id: "java", name: "JAVA", icon: <DiJava/>},
  {id: "mysql", name: "MySQl", icon: <DiMysql/>},
  {id: "sass", name: "Sass", icon: <DiSass/>},
  {id: "react", name: "React", icon: <DiReact/>},
  {id: "node", name: "NodeJs", icon: <DiNodejs/>},
  {id: "boot", name: "Bootstrap", icon: <DiBootstrap/>},


]

const Tecnologias = () => {
  return (
    <section className='tecnologia-container'>
      <h2>Tecnologias</h2>
      <div className='tecnologia-grid'>
        {tecnologias.map((tec) => (
          <div className="tecnologia-card" id={tec.id} key={tec.id}>
            {tec.icon}
            <div className="tecnologia-info">
              <h3>{tec.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Tecnologias
