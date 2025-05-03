<div className="right-side">
    <div id="about">
        <span className="right-side-titles">About</span>
        <span className="right-side-text">
            Australian based freelance website designer who turns pixels and code into cool things for you to click. Open to collaborations.
        </span>
    </div>
    <div id="skills">
        <span className="right-side-titles">Skills</span>
        <div className="right-side-skills">
            <div className="right-side-logos">
                <div>
                    <img src="html-1.svg" alt="html5" className="logo-icons" />
                    <span className="below-logo-text">HTML</span>
                </div>
                <div>
                    <img src="css-3.svg" alt="css3" className="logo-icons" />
                    <span className="below-logo-text">CSS</span>
                </div>
                <div>
                    <img src="javascript-r.svg" alt="js" className="logo-icons" />
                    <span className="below-logo-text">JavaScript</span>
                </div>
            </div>
            <div className="right-side-logos-bottom">
                <div>
                    <img src="react-2.svg" alt="react" className="logo-icons" />
                    <span className="below-logo-text">React</span>
                </div>
                <div>
                    <img src="figma-icon.svg" alt="figma" className="logo-icons" />
                    <span className="below-logo-text">Figma</span>
                </div>
            </div>
        </div>
    </div>
    <div id="projects">
        <span className="right-side-titles">Experience</span>
        <span className="right-side-text">
            Projects are currently in progress — updates will be coming soon!
        </span>
    </div>
    <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
        Projects
    </button>
    <div className="right-side-blocks" id="projects">
        <span className="right-side-titles">Projects</span>
        <br />
        <span className="right-side-text">
            Currently in progress — updates will be coming soon!
        </span>
    </div>
    <div className="right-side-summary">
        <span className="summary-text">Loosely designed in Figma and coded in Visual Studio Code. Built with react.js. All text is set in MS Sans Serif.</span>
    </div>
</div>


const connectMetaMask = async () => {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWalletAddress(accounts[0]);
            setIsDropdownVisible(false);  // Close dropdown after selection
        } catch (err) {
            console.error("User rejected the MetaMask connection", err);
        }
    } else {
        alert('Please install MetaMask!');
        setIsDropdownVisible(false);  // Close dropdown if MetaMask is not installed
    }
};

{/* Header with Connect Wallet */}
<div className="top-bar">
  {walletAddress ? (
    <p className="wallet-address">Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
  ) : (
    <>
      <button onClick={toggleDropdown} className="connect-wallet-btn">
        Connect Wallet
      </button>

      {/* Dropdown for selecting wallet */}
      {isDropdownVisible && (
        <div className="wallet-dropdown">
          <button onClick={connectMetaMask} className="dropdown-item">MetaMask</button>
          <button onClick={connectPhantom} className="dropdown-item">Phantom</button>
        </div>
      )}
    </>
  )}
</div>
