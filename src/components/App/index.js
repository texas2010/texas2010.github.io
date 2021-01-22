import React, { Component } from 'react'
import NavBar from '../NavBar'
import AboutSection from '../AboutSection'
import ProjectSection from '../ProjectSection'
import ContactSection from '../ContactSection'

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <AboutSection />
                <ProjectSection />
                <ContactSection />
            </div>
        )
    }
}
