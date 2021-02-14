import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDark: true
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        const themeMode = localStorage.getItem('themeMode')
        if (themeMode) {
            document.documentElement.classList.add(themeMode)
            this.setState({ isDark: themeMode === 'dark' })
        }
    }
    handleSubmit() {
        this.setState((state) => ({ isDark: !state.isDark }), () => {
            localStorage.setItem('themeMode', this.state.isDark ? 'dark' : 'light')
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.replace('dark', 'light')
            } else if (document.documentElement.classList.contains('light')) {
                document.documentElement.classList.replace('light', 'dark')
            } else {
                document.documentElement.classList.add('dark')
            }
        })
    }
    render() {
        const { isDark } = this.state
        return (
            <Button onClick={this.handleSubmit} variant="link" type="button" className={this.props.className}>
                <span>{isDark ? 'Dark' : 'Light'} Mode </span>
                <FontAwesomeIcon icon={isDark ? faMoon : faSun} className="text-white" />
            </Button>
        )
    }
}
