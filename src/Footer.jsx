import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <>
            <footer className='footer'>
                <p>copyright © {2023}</p>
            </footer>
        </>
    )
}

export default Footer;