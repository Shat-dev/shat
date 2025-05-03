import './ProfilePage.css';
import { useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';


export function ProfilePage() {
    const location = useLocation();
    const name = location.state?.name || '';
    const form = useRef();
    const [walletAddress, setWalletAddress] = useState(null);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(true); // New state to control popup visibility
    const popupRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5ua09f6', 'template_nuyz2y9', form.current, 'hHevB0Sc509ZhaCD8')
            .then(() => {
                alert("Message delivered! Thanks for getting in touch.");
                form.current.reset();
            }, (error) => {
                alert("Failed to send message: " + error.text);
            });
    };

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

    return (
        <>
            <div className="Shat-webpage">
                <div className="layout-container">
                    {/* Header with Connect Wallet */}
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
                    <div className="positions">
                        <div className="left-side">
                            <div className="left-side-fixed-content">
                                <div className="top-text">
                                    <p className="top-text-name">
                                        Hi
                                        {name ? (
                                            <>
                                                {" "}
                                                <span className="top-text-username">{name},</span>
                                                <br />
                                            </>
                                        ) : (
                                            ", "
                                        )}
                                        I'm <span className="top-text-Shat">Shat</span>
                                        <br />
                                        I create <span className="top-text-colour">websites.</span>
                                    </p>
                                    <p className="top-text-title">Front End Developer</p>
                                </div>
                                <div className="unique-tabs">
                                    <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                                        About
                                    </button>
                                    <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
                                        Experience
                                    </button>
                                    <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                        Contact
                                    </button>
                                </div>
                                <div className="social-icons">
                                    <a href="https://x.com/shat_xyz" target="_blank" rel="noopener noreferrer">
                                        <img src="x-2.svg" />
                                    </a>
                                    <a href="https://github.com/Shat-dev" target="_blank" rel="noopener noreferrer">
                                        <img src="github.svg" />
                                    </a>
                                    <a href="https://t.me/shatxyz" target="_blank" rel="noopener noreferrer">
                                        <img src="telegram-1.svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="right-side">
                            <div id="about">
                                <span className="right-side-titles">About</span>
                                <br />
                                <span className="right-side-text">
                                    Sydney based freelance website designer who turns pixels and code into cool things for you to click. <br />
                                    Passionate about Web3 and building the decentralized internet. <br />
                                    Open to collaborations.
                                </span>
                            </div>
                            <div className="right-side-blocks" id="experience">
                                <span className="right-side-titles">Experience</span>
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
                                    <span className="right-side-text">
                                        Projects currently in progress — updates will be coming soon !
                                    </span>
                                </div>
                            </div>
                            <div className="right-side-blocks" id="contact">
                                <span className="right-side-titles">Contact</span>
                                <form ref={form} onSubmit={sendEmail} className="contact-form">
                                    <input type="text" name="user_name" placeholder="Your Name" required />
                                    <input type="email" name="user_email" placeholder="Your Email" required />
                                    <textarea name="message" placeholder="Your Message" required />
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
