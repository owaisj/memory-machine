import React, {Component} from 'react'
import Piece from './Piece'
const styles = {
    container: {
        border: '2px solid #b98ea7',
        backgroundColor: '#f5f2d0',
        minHeight: '200px',
        marginTop: '1em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '1em'
    }
}

const images = [
    //TODO: Add more 200x200 images
    {
        url: '/assets/images/murray1.jpg'
    },
    {
        url: '/assets/images/murray2.jpg'
    }
]

export default class Board extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Piece data={images}/>
            </div>
        )  
    }
}