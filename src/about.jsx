import './App.css'

export default function About() {
    return (
        <div>
            <head>
                <title>About</title>
            </head>
        <header className = "logo-header-logo">
        <a href='/'><img src="https://github.com/Jun1on/Bai-Supply/blob/main/graphics/text.png?raw=true" align="left" alt="Logo" className="left-header-logo" /></a>
          
          <div className = "about-margin">
          <ul>
          <li><a href='/vaults'><button class ="navigation-bar">Vaults</button></a></li>
          <li><a href='/swap'><button class ="navigation-bar">Swap</button></a></li> 
          <li><a href='/stake'><button class ="navigation-bar">Stake</button></a></li>
          <li><a href='/about'><button class ="navigation-bar">About</button></a></li>
        </ul>

          </div>
          
        <div className = "right-header-button">
        <a href='/vaults'><button>Connect Wallet</button></a>

        </div>
        </header>
        <div>
            <h2 class="h2">About Bai Supply</h2>
            <p>BAI is a stablecoin built on BCT, which is a token that is created through the reduction of carbon in the atmosphere.
                BCT can be deposited to borrow BAI, which has a value of $1 per coin. This enables users to utilize their carbon impact into usable capital.
                Bai Supply aims to revolutionize the stablecoin landscape by harnessing the power of blockchain technology to create an innovative, secure, and transparent financial ecosystem that encourages environmentally responsible practices.
            </p>
        </div>
        <div>
            <h2 class="h2">Why Bai Supply?</h2>
            <p>The exchange of stable coins provides a safer alternative to the high volatility of popular cryptocurrencies. 
                By enabling individuals and companies to collateralize their carbon tokens to mint BAI, they can now access a stable asset for loans and other financial transactions. </p>
        </div>      
        <div>
            <h2 class="h2">Our mission</h2>
            <p>Currently, the carbon token solely exists as a method of keeping track of offsetted carbon emissions from credit transactions. 
                We are pioneering a new purpose and incentive for companies and individuals to purchase the carbon token: the stable coin. </p>
        </div>

        </div>)
}