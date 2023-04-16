import { useState } from 'react'
import './App.css'


export default function Vault() {
    const [count, setCount] = useState(0)
    return (
      <div className="App">
        <header>
            <nav>
            <a href='/'><img src="https://github.com/Jun1on/Bai-Supply/blob/main/graphics/text.png?raw=true" alt="Logo" className="left-header-logo" /></a>
            
            <div className = "right-header-button">
            <a href='/vaults'><button>Connect Wallet</button></a>

            </div>
        </nav>
        </header>

        <div className = "head">
            Vaults Overview
        </div>


        <div className = "bolded-text">Create New Vault</div>
 
        <div className = "left">
            <div id="rcorners2">
                 <img src="https://github.com/Jun1on/Bai-Supply/blob/main/graphics/Logo.png?raw=true" className="bottom-logo" alt="Vite logo" />
                <p class="text">BAI</p>

                <div className = "left">
                    Minimum Collateral <br/>Repayment Fee <br/> Deposit Fee <br />Minimum Debt <br/> Avaliable VOLT  
                    <div className = "margin"></div>
                    <a href='/vaults'><button class = "gradient-button">Create Vault</button></a>
                </div>
                
                <div className = "right">
                    150% <br/>0.5% <br/>0% <br/>0 VOLT <br/>672.54 VOLT
                </div>

                



            </div>
            <div id="rcorners2">
            
            <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/15027.png" className="bottom-logo" alt="Vite logo" />
            <p class="text">CAR</p>
            <div className = "left">
                Minimum Collateral <br/>Repayment Fee <br/> Deposit Fee <br />Minimum Debt <br/> Avaliable VOLT  <br/>
                <div className = "margin"></div>
                <a href='/vaults'><button class = "gradient-button">Create Vault</button></a>
            </div>
            
            <div className = "right">
                150% <br/>0.5% <br/>0% <br/>0 VOLT <br/>12563.56 VOLT
            </div>
              
            </div>
        </div>
        
      </div>
      
        
    )
}


