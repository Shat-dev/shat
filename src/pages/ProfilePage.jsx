import './ProfilePage.css';
import { useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';


export function ProfilePage() {
    const location = useLocation();
    const name = location.state?.name || '';
    const form = useRef();
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

    return (
        <>
            <div className="Shat-webpage">
                <div className="layout-container">
                    <div className="
                        grid grid-cols-[2fr_3fr] gap-8 ml-[31px] mr-[31px]
                        max-[1024px]:flex max-[1024px]:flex-col
                        max-[600px]:block max-[600px]:ml-0 max-[600px]:mr-0
                        ">
                        <div className="max-[1024px]:w-full">
                            <div className="fixed top-[120px] left-[calc((100vw-1000px)/2+31px)] w-[250px] bg-[#202020] text-[rgb(237,237,237)]
                                        max-[1024px]:relative max-[1024px]:top-auto max-[1024px]:left-auto max-[1024px]:w-full max-[1024px]:px-[10px]
                                        max-[600px]:px-[16px] max-[600px]:top-0 max-[600px]:left-0 max-[600px]:text-left"
                            >
                                <div className="mb-[70px] max-[600px]: -mt-[30px] pt-[10px] max-[600px]: -mt-[50px] mb-[90px]">
                                    <p className="font-semibold text-[rgb(237,237,237)] text-[30px] leading-[50px] [word-spacing:0.3rem]">
                                        Hi
                                        {name ? (
                                            <>
                                                {" "}
                                                <span className="bg-[#e1e1e1] text-[#202020] px-1 py-0.5 rounded-sm">{name},</span>
                                                <br />
                                            </>
                                        ) : (
                                            ", "
                                        )}
                                        I'm <span className="text-[42px] text-[rgb(237,237,237)]">Shat</span>
                                        <br />
                                        I create <span className="relative text-[30px] font-bold bg-[#e1e1e1] text-[#202020] px-1 py-0.5 rounded-sm ">
                                            websites. </span>
                                    </p>
                                    <p className="text-[rgb(200,200,200)] text-[15px] font-bold mt-5 ">Front End Developer</p>
                                </div>
                                <div className="flex flex-col items-start -mt-[20px]">
                                    <button
                                        className="block mt-[30px] bg-[#202020] border-2 border-[rgb(243,243,243)] text-[rgb(237,237,237)] pt-[18px] pb-[18px] w-[180px] text-center text-[16px] rounded-[2px] cursor-pointer transition-transform duration-200 ease-in-out relative overflow-hidden not-italic font-normal hover:bg-[rgba(255,255,255,0.1)] focus:outline-none max-[1024px]:hidden"
                                        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        About
                                    </button>
                                    <button
                                        className="block mt-[30px] bg-[#202020] border-2 border-[rgb(243,243,243)] text-[rgb(237,237,237)] pt-[18px] pb-[18px] w-[180px] text-center text-[16px] rounded-[2px] cursor-pointer transition-transform duration-200 ease-in-out relative overflow-hidden not-italic font-normal hover:bg-[rgba(255,255,255,0.1)] focus:outline-none max-[1024px]:hidden"
                                        onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
                                        Experience
                                    </button>
                                    <button
                                        className="block mt-[30px] bg-[#202020] border-2 border-[rgb(243,243,243)] text-[rgb(237,237,237)] pt-[18px] pb-[18px] w-[180px] text-center text-[16px] rounded-[2px] cursor-pointer transition-transform duration-200 ease-in-out relative overflow-hidden not-italic font-normal hover:bg-[rgba(255,255,255,0.1)] focus:outline-none max-[1024px]:hidden"
                                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    >
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
                                <span className="block text-center mx-auto leading-[3]">
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
                                            <img src="tailwind-css-2.svg" className="logo-icons" />
                                            <span className="below-logo-text">TailwindCSS</span>
                                        </div>
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
