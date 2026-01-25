import '@fontsource/commit-mono/200.css'
import '@fontsource/commit-mono/300.css'
import './App.css'

function App() {
  return (
    <main>
      <h1>Hey, I'm Lifeng</h1>
      <section id="about">
        <h4>ABOUT</h4>
        <p>
          Developer studying Computer Engineering @ UWaterloo, focusing on the intersection of design and code.
          <br />
          <br />
          Driven by the tiny details, I strive to build projects that are both functional and beautiful. Having attended 10+ hackathons, I've come to love the creative process of building things from scratch.
          <br />
          <br /> 
          
          When I'm not coding, you can find me rock climbing, writing, or tinkering with hardware.
        </p>
      </section>

      <section id="works">
        <h4>PROJECTS</h4>
        <ol>
          <li>
            <a href="https://github.com/Yourself1011/one-two-red-blue">one-two-red-blue</a>
          </li>
          <li>
            <a href="https://github.com/jeffrey-zang/opus">Opus</a>
          </li>
          <li>
            <a href="https://github.com/lifeng-yin/mathworkit">Mathworkit</a>
          </li>
          <li>
            <a href="https://github.com/RythmHacks/dash.rythmhacks.ca">RythmHacks</a>
          </li>
          <li>
            <a href="https://github.com/Yourself1011/memento">Memento</a>
          </li>
          <li>
            <a href="https://github.com/lifeng-yin/cultivate">Cultivate</a>
          </li>
        </ol>
      </section>

      <section id="links">
        <h4>LINKS</h4>
        <p>
          <a href="mailto:lifeng.yin.07@gmail.com" target="_blank">Email</a>&nbsp;&middot;&nbsp;
          <a href="https://github.com/lifengyin" target="_blank">GitHub</a>&nbsp;&middot;&nbsp;
          <a href="https://linkedin.com/in/lifengyin" target="_blank">Linkedin</a>&nbsp;&middot;&nbsp;
          <a href="https://devpost.com/lifeng-yin" target="_blank">Devpost</a>
        </p>
      </section>

      <section>
        <hr />
        <p id="copyright">© Copyright {new Date().getFullYear()} Lifeng Yin. All rights reserved.</p>
      </section>
    </main>
  )
}

export default App
