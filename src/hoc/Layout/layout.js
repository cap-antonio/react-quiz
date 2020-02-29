import React from 'react'
import classes from './Layout.module.css'
import MenuToggle from '../../Components/Navigation/MenuToggle/MenuToggle'
import Drawer from '../../Components/Navigation/Drawer/Drawer'
import { connect } from 'react-redux'

class Layout extends React.Component {
    state = {
        menu: false
    }
    toggelMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    MenuCloseHandler = () => {
        this.setState({
            menu: false
        })
    }
    render () {
        return (
            <div className = {classes.Layout}>
                <Drawer isOpen = { this.state.menu } onClose = { this.MenuCloseHandler }
                    isAutheticated={ this.props.isAutheticated }/>
                <MenuToggle onToggle = { this.toggelMenuHandler } 
                    isOpen = { this.state.menu }
                    />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAutheticated: !!state.auth.token
    }
}

export default connect(mapStateToProps, null)(Layout)