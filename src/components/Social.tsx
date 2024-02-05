import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"



import '../styles/components/social.sass'

const socialSocial =[
    {name: "linkedin", icon: <FaLinkedin/>},
    {name: "github", icon: <FaGithub/>},
    {name: "instagram", icon: <FaInstagram/>},
]

const Social = () => {
  return ( <section id="social-social">
    {socialSocial.map((network) =>(
        <a href="#" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
  </section>
  )
}

export default Social
