const [walletAddress, setWalletAddress] = useState(null);
const [isDropdownVisible, setIsDropdownVisible] = useState(false);
const [showPopup, setShowPopup] = useState(false);
const [isPopupVisible, setIsPopupVisible] = useState(true); // New state to control popup visibility
const popupRef = useRef();

const connectPhantom = async () => {
    if (window.solana && window.solana.isPhantom) {
        try {
            const response = await window.solana.connect();
            const address = response.publicKey.toString();
            setWalletAddress(address);
            setShowPopup(true); // Show popup after connection
            setIsPopupVisible(true); // Make popup visible immediately
        } catch (err) {
            console.error("User rejected the Phantom connection", err);
        }
    } else {
        alert('Please install Phantom Wallet!');
    }
};

const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
};

// Handle click outside of the popup to hide it
useEffect(() => {
    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setIsPopupVisible(false); // Hide popup if clicked outside
        }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
        document.removeEventListener('click', handleClickOutside);
    };
}, []);

<div className="top-bar">
    {walletAddress ? (
        <div className="wallet-connected">
            <p className="wallet-address" onClick={toggleDropdown}>
                Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </p>

            {isDropdownVisible && (
                <div className="wallet-dropdown">
                    <button className="disconnect-button" onClick={() => {
                        setWalletAddress(null);
                        setShowPopup(false);
                        setIsDropdownVisible(false);
                    }}>
                        Disconnect
                    </button>
                </div>
            )}
        </div>
    ) : (
        <button onClick={connectPhantom} className="connect-wallet-btn">
            Connect Wallet
        </button>
    )}

    {showPopup && isPopupVisible && (
        <div ref={popupRef} className="wallet-popup">
            <img src="/y2k-favicon.svg" alt="Thank You Icon" className="thank-you-icon" />
            <strong>
                Thanks {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </strong>
            <p>
                Shat appreciates you for coming all this way. As a thank you, you've been whitelisted for an upcoming free NFT mint — coming soon.
            </p>
        </div>
    )}
</div>

