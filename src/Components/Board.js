import React, {Component} from 'react'
import Piece from './Piece'
const styles = {
    container: {
        border: '2px solid #b98ea7',
        minHeight: '200px',
        marginTop: '1em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-betwee'
    }
}

export default class Board extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Piece />
            </div>
        )  
    }
}