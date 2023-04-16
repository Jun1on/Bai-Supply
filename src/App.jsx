import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[name, setName] = useState("")

  const myButton = document.getElementById('my-button');
  const nameDisplay = document.getElementById('name-display');
  

  
  return (
    
    <div className="App">
      <header className = "logo-header-logo">
        <div className="test">
          <ul>
          <li>          <a href='/'><img src="https://github.com/Jun1on/Bai-Supply/blob/main/graphics/text.png?raw=true" alt="Logo" className="left-header-logo" /></a>
</li>
          <li><a href='/vaults'><button class ="navigation-bar">Vaults</button></a></li>
          <li><a href='/swap'><button class ="navigation-bar">Swap</button></a></li> 
          <li><a href='/stake'><button class ="navigation-bar">Stake</button></a></li>
          <li><a href='/about'><button class ="navigation-bar">About</button></a></li>

        </ul>
        <div className = "right-header-button">
          
        <a href='/vaults'><button>Connect Wallet</button></a>

        </div>
        </div>
      </header>
      
      
      
      <div></div>
      <img src = "https://github.com/Jun1on/Bai-Supply/blob/main/graphics/text%20white.png?raw=true" className = "gray-logo"/>

      <div></div>
      
      <span class="gradient-text">Amplify Your Carbon Offset</span>
      <h3>Borrow BAI stablecoin at 0% interest by depositing your carbon tokens</h3>
      
      <div className="card">
        <a href='/vaults'><button>Borrow now -{'>'}</button></a>      
      </div>
      
      <div>
        <d2>Total Value Locked: $5000</d2>
        <p>Tons of CO<sub>2</sub> Locked: 1000 tons</p>

      </div>

      <a href="/vaults" target="_blank">
          <img src="https://github.com/Jun1on/Bai-Supply/blob/main/graphics/Logo.png?raw=true" className="logo" alt="Vite logo" />
      </a>

      
     
      <footer>
        <a href="https://discord.com" target="_blank">
          <img src="https://github.com/Jun1on/Bai-Supply/blob/main/graphics/discord.png?raw=true" className="bottom-logo"></img>
        </a>
        <a href="https://twitter.com" target="_blank">
          <img src="https://github.com/Jun1on/Bai-Supply/blob/main/graphics/twitter.png?raw=true" className="bottom-logo"></img>
        </a> 

        <a href="https://instagram.com" target="_blank">
          <img src="https://github.com/Jun1on/Bai-Supply/blob/main/graphics/instagram.png?raw=true" className="bottom-logo"></img>
        </a>   
      </footer>
 
        
    </div>
    
  )
}

export default App

/*
<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <img src= "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L25zODIzMC1pbWFnZS5qcGc.jpg">
        </img>

      <div>
        <form>
          <label htmlFor="name">Enter your name:  </label>
          <input type="text" id="name" name="name" required></input>
          <button type="submit"
            onClick={() => <div><h1> {name} </h1></div>}>
          Submit</button>
        </form>
      </div>
*/