import React from 'react'

const Hero = ({handleLogout}) => {
    return(
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button className="button_blue" onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Hero;