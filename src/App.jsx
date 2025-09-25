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
              Apaixonado por programação desde o ensino técnico 🎓, 
              venho explorando tanto <b>Front-End</b> quanto <b>Back-End</b> há mais de 4 anos.
              Já desenvolvi projetos em <b>HTML5, CSS3, Javascript, 
              Java, C, C#, C++, Kotlin, React, SQLServer e MySQL.</b>
              Sou movido pela curiosidade,
              gosto de resolver problemas e tenho fascínio por <b>hardwares</b> ⚙️.
            </p>
          </div>
        </div>
      </div>
      <div className="Spacing"></div>
      <div id="Skills">
        <div id="Skills-Filter">
          <div id="titles">
            <h1>FRONT-END</h1>
            <h1>BACK-END</h1>
            <h1>DATABASES</h1>
          </div>
          <div className="languages-column">
            <div className="book">
              <img src="/HTML.png" alt="" />
              <h1>HTML</h1>
            </div>
            <div className="book">
              <img src="/NodeJS.png" alt="" />
              <h1>NODE.JS</h1>
            </div>
            <div className="book">
              <img src="/SqlServer.png" alt="" />
              <h1>SQL SERVER</h1>
            </div>
          </div>

          <div className="languages-column">
            <div className="book">
              <img src="/CSS.png" alt="" />
              <h1>CSS</h1>
            </div>
            <div className="book">
              <img src="/Java.png" alt="" />
              <h1>JAVA</h1>
            </div>
            
            <div className="book">
              <img src="/MySql.png" alt="" />
              <h1>MYSQL</h1>
            </div>
          </div>

          <div className="languages-column">
            <div className="book">
              <img src="/JS.png" alt="" />
              <h1>JAVASCRIPT</h1>
            </div>
            <div className="book">
              <img src="/Csharp.png" alt="" />
              <h1>C#</h1>
            </div>
            <div className="book">
              <img src="/MongoDb.png" alt="" />
              <h1>MONGODB</h1>
            </div>
          </div>
          <div className="languages-column">
            <div className="book">
              <img src="/React.png" alt="" />
              <h1>REACT</h1>
            </div>
            <div className="book">
              <img src="/Python.png" alt="" />
              <h1>PYTHON</h1>
            </div>
            <div className="book">
              <img src="/Dbeaver.png" alt="" />
              <h1>DBEAVER</h1>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
