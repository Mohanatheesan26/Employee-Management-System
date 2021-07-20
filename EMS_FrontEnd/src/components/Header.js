import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="https://javaguides.net" className="navbar-brand">Employee Management System</a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
