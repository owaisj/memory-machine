import React, {Component} from 'react'

export default class Piece extends Component {
    render() {
        const data = this.props.data;
        return (
            data.map((item, i) => {
                return (
                    <div key={i} onClick={() => {
                        if (data[i].isClicked === true) return alert('Clicked already!')
                        data[i].isClicked = true;
                        }
                    }>
                        <img src={item.url} 
                            alt="fillmurray placeholder"
                        />
                    </div>
                )
            })
        )
    }
}