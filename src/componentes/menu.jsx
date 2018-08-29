import React, { Component } from "react";

import PreMenu from './preMenu'


export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { estado: "menu-nav--principal", icon: 'fa-bars' };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({ ...this.state, estado: 'menu-nav--principal menu-js', icon: 'fa-times' });
    }
    handleClose() {
        this.setState({ ...this.state, estado: 'menu-nav--principal', icon: 'fa-bars' });
    }
    render() {
        return (
            <div>
                <PreMenu estado={this.state.estado} handleOpen={this.handleOpen} handleClose={this.handleClose} icon={this.state.icon}/>
            </div>
        )
    }
}