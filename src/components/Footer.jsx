import React from 'react'
import LogoWhite from '../assets/kasa-white.png'

function Footer() {
    return (
        <footer className="footerContainer">
            <img className="footerLogo" src={LogoWhite} alt="logo-white" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer
