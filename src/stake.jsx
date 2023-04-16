
import './App.css'
import { useState } from 'react'

export default function Stake() {
    const [count, setCount] = useState(0)
    return (
        <div className="App">
      <header>
            <nav>
            <a href='/'><img src="https://github.com/Jun1on/Bai-Supply/blob/main/graphics/text.png?raw=true" alt="Logo" className="left-header-logo" /></a>
            
            <div className = "right-header-button">
            <a href='/vaults'><button>Launch App</button></a>

            </div>
        </nav>
        </header>
      </div>
        
    )
}

