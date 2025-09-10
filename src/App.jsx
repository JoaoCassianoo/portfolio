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
          <a href="#AboutMe">About-Me</a>
          <a href="#Skills">Skills</a>
          <a href="#Projects">Projects</a>
        </div>
      </nav>
      <div id='AboutMe'>
        <div id="AboutMe-Filter">
          <span>Hello there 👋, I'm </span>
          <h1>João Cassiano</h1>
          <span id="span-2">Full-Stack Developer</span>
        </div>
      </div>
      <div className="Spacing"></div>
      <div id="Skills">
        <div id="Skills-Filter">
          <div>
            <img className="Giants" src="HTML.png" alt="HTML" />
            <img className="Giants" src="CSS.png" alt="CSS" />
            <img className="Giants" src="JS.png" alt="JavaScript" />
            <img src="React.png" alt="React" />
          </div>
          <div>
            <img src="NodeJS.png" alt="NodeJS" />
            <img src="Csharp.png" alt="C#" />
            <img src="Java.png" alt="Java" />
            <img src="Python.png" alt="Python" />
          </div>
          <div>
            <img src="SqlServer.png" alt="SQL Server" />
            <img src="MongoDb.png" alt="MongoDB" />
            <img src="Dbeaver.png" alt="DBeaver" />
            <img src="MySql.png" alt="MySQL" />
          </div>
        </div>
      </div>
      <div className="Spacing"></div>
      <div id="Projects">

      </div>
    </>
  )
}

export default App
