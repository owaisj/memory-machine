import React, {Component} from 'react'
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f0d3f7',
        color: 'white',
        padding: '1em'
    },
    title: {
        color: '#302f4d'
    }
}

export default class Navbar extends Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.title}>
                    Clicky Game
                </div>
                <div>
                    Score: 0 | Top Score: 0
                </div>
            </div>   
        )
    }
}