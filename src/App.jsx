import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa"
import './App.css'

function App() {

  return (
    <>
      <nav>
        <div id='SocialNetworks'>
          <a href=""><FaGithub size={50}/></a>
          <a href=""><FaInstagram size={50}/></a>
          <a href=""><FaWhatsapp size={50}/></a>
        </div>
        <div id="Links">
          <a href="#AboutMe2">About-Me</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
        </div>
      </nav>
      <div id='AboutMe'>
        <div id="AboutMe-Filter">
          <span>Hello there 👋, I'm </span>
          <h1>João Cassiano</h1>
          <span id="span-2">Full-Stack Developer 🚀</span>
        </div>
      </div>
      <div className="Spacing"></div>
      <div id="AboutMe2">
        <div id="AboutMe-Filter2">
          <img src="/Me.png" alt="" />
          <div>
            <h1>About Me</h1>
            <p>
              Sou apaixonado pela área da programação, 
              meu interesse aumentou ainda mais quando entrei no colégio técnico, 
              onde comecei a desenvolver projetos e aumentar ainda mais o interesse na área, 
              me interesso pelas duas áreas tanto <b>Front-End</b> quanto <b>Back-End</b>. 
              Estou a 4 anos criando projetos e desenvolvendo softwares no colégio, 
              utilizando <b>HTML5, CCS3, Javascript, Java, C#, C, C++, Kotlin, ReactJs, SQlServer, mySql e React. </b>
              Também sou fascinado pela área dos <b>Hardwares</b>.
            </p>
          </div>
        </div>
      </div>
      <div className="Spacing"></div>
      <div id="Skills">
        <div id="front-end">
          <div className="book">
            <img src="/html.png" alt="" />
            <h1>HTML</h1>
          </div>
          <div className="book">
            <img src="/css.png" alt="" />
            <h1>CSS</h1>
          </div>
          <div className="book">
            <img src="/js.png" alt="" />
            <h1>JAVASCRIPT</h1>
          </div>
          <div className="book">
            <img src="/react.png" alt="" />
            <h1>REACT</h1>
          </div>
        </div>

        <div id="back-end">
          <div className="book">
            <img src="/nodejs.png" alt="" />
            <h1>NODE.JS</h1>
          </div>
          <div className="book">
            <img src="/java.png" alt="" />
            <h1>JAVA</h1>
          </div>
          <div className="book">
            <img src="/csharp.png" alt="" />
            <h1>C#</h1>
          </div>
          <div className="book">
            <img src="/python.png" alt="" />
            <h1>PYTHON</h1>
          </div>
        </div>

        <div id="bd">
          <div className="book">
            <img src="/sqlserver.png" alt="" />
            <h1>SQL SERVER</h1>
          </div>
          <div className="book">
            <img src="/mysql.png" alt="" />
            <h1>MYSQL</h1>
          </div>
          <div className="book">
            <img src="/mongodb.png" alt="" />
            <h1>MONGODB</h1>
          </div>
          <div className="book">
            <img src="/dbeaver.png" alt="" />
            <h1>DBEAVER</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
