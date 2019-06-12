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

let images = [
    //TODO: Add more 200x200 images
    {
        id: 1,
        url: '/assets/images/murray1.jpg'
    },
    {
        id: 2,
        url: '/assets/images/murray2.jpg'
    },
    {
        id: 3,
        url: 'assets/images/murray3.jpg'
    },
    {
        id: 4,
        url: 'assets/images/murray4.jpg'
    }
]

export default class Board extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            clicked: [],
            highScore: 0
        }
        this.handleClick = this.handleClick.bind(this);
    };
    reset() {
        this.setState({
            score: 0,
            clicked: []
        }, this.props.grabScore(this.state.highScore, 0))
    }
    handleClick(id) {
        let highScore = this.state.highScore;
        //Correct Guess
        if (this.state.clicked.indexOf(id) === -1) {
            let currentScore = this.state.score + 1;
            //Check for new high score
            if (currentScore > highScore) highScore = currentScore;
            this.setState({
                highScore: highScore,
                score: currentScore,
                clicked: this.state.clicked.concat(id)
            }, this.props.grabScore(highScore, currentScore))
        //Incorrect Guess
        } else {
            this.reset();        
        }
    }
    render() {
        return (
            <div style={styles.container}>
                <Piece 
                    handleClick={this.handleClick}
                    data={images}/>
            </div>
        )  
    }
}