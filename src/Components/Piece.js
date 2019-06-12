import React, {Component} from 'react'

const styles = {
    container: {
        margin: '1em'
    },
    images: {
        maxWidth: '200px',
        maxHeight: '200px'
    }
}

export default class Piece extends Component {
    render() {
        const data = this.props.data;
        return (
            data.map((item, i) => {
                return (
                    <div key={i}
                        onClick={() => this.props.handleClick(item.id)}
                        style={styles.container}>
                        <img src={item.url} 
                            alt="fillmurray placeholder"
                            style={styles.images}
                        />
                    </div>
                )
            })
        )
    }
}