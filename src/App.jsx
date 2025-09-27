import { FaGithub, FaInstagram, FaWhatsapp} from "react-icons/fa"
import './App.css'
import { useEffect, useState } from "react";

function App() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={scrolled ? "scrolled" : ""}>
        <div id='SocialNetworks'>
          <a href="https://github.com/JoaoCassianoo" target="_blank"><FaGithub size={50}/></a>
          <a href="https://www.instagram.com/jj.c4ss/" target="_blank"><FaInstagram size={50}/></a>
          <a target="_blank" href="https://wa.me/5519993814025?text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20saber%20mais">
            <FaWhatsapp size={50}/>
          </a>
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
          <div id="AboutMe-Content">
            <h1>About Me</h1>
            <p>
              Passionate about programming since technical high school 🎓, 
              I have been exploring both <b>Front-End</b> and <b>Back-End</b> for over 4 years. 
              I have developed projects in <b>HTML5, CSS3, JavaScript, 
              Java, C, C#, C++, Kotlin, React, SQLServer, and MySQL.</b> 
              I am driven by curiosity, 
              enjoy solving problems, and have a fascination with <b>hardware</b> ⚙️.
            </p>
          </div>
        </div>
      </div>
      <div className="Spacing"></div>
      <div id="Skills">
        <div id="Skills-Filter">
          <h1 id="Skills-Title">SKILLS</h1>
          <div id="Table-Skills">
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
      </div>
      <div className="Spacing"></div>
      <div id="Projects">
        <div id="Projects-Filter">
          <h1>PROJECTS</h1>
          <div className="Card-Project">
            <div className="Card-Content">
              <h1>A 7 CHAVES STUDIO</h1>
              <p>
                This is just a website to promote the social networks
                of a music studio, 
                the website has a proprietary domain.
              </p>
              <div className="Tecnologies">
                <h4>Technologies used:</h4>
                <img src="data:image/png;base64,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" alt="" />
                <img src="data:image/png;base64,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" alt="" />
              </div>
            </div>
            <div className="Picture-Project">
              <a href="https://a7chavesstudio.com.br/" target="_blank">
                <img src="/a7chaves.png" alt="" />
              </a>
            </div>
          </div>
          <div className="Card-Project">
            <div className="Card-Content">
              <h1>BRAIN TALK</h1>
              <p>
                BrainTalk is an innovative social networking
                 platform, initially designed with the main 
                 focus on providing a virtual space dedicated 
                 to studies.
                 <br/>No repository available for this project 🚧
              </p>
              <div id="Big-Tecnologies">
                <h4>Technologies used:</h4>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFC0lEQVR4nO2de4hVVRTG13Icm8zxhZmJJlmClIhoOVZKk5YoZiKKFaQhRSIEaSISPpgIVFARKkNUUCNSzAemoVNayfSyfFQ6Z6Ds+UcYvcnKHrZi3ePF2/Wcu8+598yse4/fBwtmYN97Zr7f3XutvfYehgiCIAiCIAiCIAiCIAiCUippoXpppgYEuT1oofrWB6IP8kgQ5PagmRoAxCujDwuAkD0EACF74wGE7M0GELI3GEDI3lQAIXsjAaQMzPMAxN4wD0DsTfIAxN4YD0DszfDKINA6IXsIAEL2xgMI2ZsNIGRvMICQvakAQvZGAkgZmOcBiL1hHoDYm+QBiL0xHoDYm+GVQaB1QvYQAITsjQcQsjcbQMjeYAAhe1MBhOyNBJAyMM8DEHvDPABJxITfj5EceSk4WvYW957fvU3yWaMfvx5JCNSlsjE8+TIJEQfGLUM40nv88j7Jyvkko+tYai67+H369WaZOZnl0PMAIq0N5NlFJF1qg18fFHfdyvLFa5ghkjSQcydJZkyKDiI3enZnObodS5YkCWTBw8XByEavHixfHUQOkSSANO8haV9VGhCN+uEs/zYjqUupQFxL1bV9WMaP8l/foTp83PR7OFPlocryigfy9wmS7l2CxzOzbHiK/vep/+YQyd31FwPbvw45RJLIIV+/Hj7+/gnBM0oh6vJUVcUy90GWM0dRZUlSVZZuGMPGr5gf/hwtdT/Yhn2IJL0P0YQeNn72fdE2kkUFduocCOT7d8KBdKxhObEbQNq8yhrYP7xy6tyJZW2DnzcwQ9oIyBOPuPcY/fuyrFmM5mKbADndRNKpY7TNX9dalnkzOVOdIYd4rQNEY/Oy8NcFRXV7v+NbNBgkdXZ2e5fNjQdFQ9vzS+eQ/BM3xwAIR2q/b1tN0q1zPCgao4ax/PAugEhSS1ZuaHvkoSn+TjwOlEEDWH4+jBkiSQPJxif7SGZNY7m8JjqUKWMjPgNLFscGkrt5XP44ydVXRoPS9AKASGvMkPw4+yHJc0vcOSasKYkZQskCyc0xQwYWPtJ1HlSlZck642h163JRygz5dH+0n+P4zsIl8k+HUw7kdBPJAxNZbriO5Y/j4eNeXBFu1JgR4UC+fYtk6li/oajJPMrPFHawpeEEW6lA9DaI9pC65lzNUeP+/Ch4vJarYSbdOz4YyJaVJD26XRhXN5jlN8dRrH4oCh3n6rKWOiB6eHTToOBfuG4wy8GNF7qwf31Mma5sob2D9qDyZ93kO4PHTrwjHLrG1lXhM1EvTDh37pUGRJOiLk+uErNDNUufq3wTXGN3r4nX5R12ow9dZ2lupaXn7IWakSOHprTKemUtZS4aRKn9yRGaG/J30fp9757u12qu0Krq+mv8pqJr/NMLKZ1ANB6bngyQeXnLVTbe2FR4mYsbem7iyj8VDUTX4mnjSjOpby/O3GAv1Hpv1650GNr5fXNzxN+tUoFkocyZUZxJWp0d2+F+xq5n4l2yzg/NKfvi3M2qZCDZaFxPMqBfdJNuGxrvZvqXByjT9oiTt3TspNEx7/WmBYic35fop1mXMW1R5Buktwj1aqjmhmKf8fmrJE8+SnL7zSy1VwQXCHr+sXBWhA1g2oFIwB/XnGr0byBGSqZFxI/v+X89pc/RrxN537QCkUoNACF7CABC9sYDCNmbDSBkbzCAkL2pAEL2RlYUEPzr1Yay+terEARBEARBEARBEARBEEQ2+g9DMh6zuReCDAAAAABJRU5ErkJggg==" alt="" />
                <img src="/AndroidStudio.png" alt="" />
                <img src="/Kotlin.png" alt="" />
                <img src="/Firebase.png" alt="" />
              </div>
            </div>
            <div id="Picture-Project-BT">
                <img src="/BrainTalk.png" alt="" />
            </div>
          </div>
          <div className="Card-Project">
            <div className="Card-Content">
              <h1>PROAMB</h1>
              <p>
                The site proamb is a site that deals 
                with nature and recycling, 
                we created a community like a blog.
              </p>
              <div className="Tecnologies">
                <h4>Technologies used:</h4>
                <img src="data:image/png;base64,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" alt="" />
                <img src="data:image/png;base64,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" alt="" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFC0lEQVR4nO2de4hVVRTG13Icm8zxhZmJJlmClIhoOVZKk5YoZiKKFaQhRSIEaSISPpgIVFARKkNUUCNSzAemoVNayfSyfFQ6Z6Ds+UcYvcnKHrZi3ePF2/Wcu8+598yse4/fBwtmYN97Zr7f3XutvfYehgiCIAiCIAiCIAiCIAiCUippoXpppgYEuT1oofrWB6IP8kgQ5PagmRoAxCujDwuAkD0EACF74wGE7M0GELI3GEDI3lQAIXsjAaQMzPMAxN4wD0DsTfIAxN4YD0DszfDKINA6IXsIAEL2xgMI2ZsNIGRvMICQvakAQvZGAkgZmOcBiL1hHoDYm+QBiL0xHoDYm+GVQaB1QvYQAITsjQcQsjcbQMjeYAAhe1MBhOyNBJAyMM8DEHvDPABJxITfj5EceSk4WvYW957fvU3yWaMfvx5JCNSlsjE8+TIJEQfGLUM40nv88j7Jyvkko+tYai67+H369WaZOZnl0PMAIq0N5NlFJF1qg18fFHfdyvLFa5ghkjSQcydJZkyKDiI3enZnObodS5YkCWTBw8XByEavHixfHUQOkSSANO8haV9VGhCN+uEs/zYjqUupQFxL1bV9WMaP8l/foTp83PR7OFPlocryigfy9wmS7l2CxzOzbHiK/vep/+YQyd31FwPbvw45RJLIIV+/Hj7+/gnBM0oh6vJUVcUy90GWM0dRZUlSVZZuGMPGr5gf/hwtdT/Yhn2IJL0P0YQeNn72fdE2kkUFduocCOT7d8KBdKxhObEbQNq8yhrYP7xy6tyJZW2DnzcwQ9oIyBOPuPcY/fuyrFmM5mKbADndRNKpY7TNX9dalnkzOVOdIYd4rQNEY/Oy8NcFRXV7v+NbNBgkdXZ2e5fNjQdFQ9vzS+eQ/BM3xwAIR2q/b1tN0q1zPCgao4ax/PAugEhSS1ZuaHvkoSn+TjwOlEEDWH4+jBkiSQPJxif7SGZNY7m8JjqUKWMjPgNLFscGkrt5XP44ydVXRoPS9AKASGvMkPw4+yHJc0vcOSasKYkZQskCyc0xQwYWPtJ1HlSlZck642h163JRygz5dH+0n+P4zsIl8k+HUw7kdBPJAxNZbriO5Y/j4eNeXBFu1JgR4UC+fYtk6li/oajJPMrPFHawpeEEW6lA9DaI9pC65lzNUeP+/Ch4vJarYSbdOz4YyJaVJD26XRhXN5jlN8dRrH4oCh3n6rKWOiB6eHTToOBfuG4wy8GNF7qwf31Mma5sob2D9qDyZ93kO4PHTrwjHLrG1lXhM1EvTDh37pUGRJOiLk+uErNDNUufq3wTXGN3r4nX5R12ow9dZ2lupaXn7IWakSOHprTKemUtZS4aRKn9yRGaG/J30fp9757u12qu0Krq+mv8pqJr/NMLKZ1ANB6bngyQeXnLVTbe2FR4mYsbem7iyj8VDUTX4mnjSjOpby/O3GAv1Hpv1650GNr5fXNzxN+tUoFkocyZUZxJWp0d2+F+xq5n4l2yzg/NKfvi3M2qZCDZaFxPMqBfdJNuGxrvZvqXByjT9oiTt3TspNEx7/WmBYic35fop1mXMW1R5Buktwj1aqjmhmKf8fmrJE8+SnL7zSy1VwQXCHr+sXBWhA1g2oFIwB/XnGr0byBGSqZFxI/v+X89pc/RrxN537QCkUoNACF7CABC9sYDCNmbDSBkbzCAkL2pAEL2RlYUEPzr1Yay+terEARBEARBEARBEARBEEQ2+g9DMh6zuReCDAAAAABJRU5ErkJggg==" alt="" />
                <img src="data:image/png;base64,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" alt="" />
                <img src="data:image/png;base64,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" alt="" />
              </div>
            </div>
            <div className="Picture-Project">
              <a href="https://github.com/JoaoCassianoo/ProAmb" target="_blank">
                <img src="/proamb.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="Spacing">
        <h6>This website is still under development.</h6>
      </div>

    </>
  )
}

export default App
