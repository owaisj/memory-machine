import React, {Component} from 'react'
import Piece from './Piece'
const styles = {
    container: {
        border: '2px solid #b98ea7',
        backgroundColor: '#f5f2d0',
        minHeight: '200px',
        maxWidth: '800px',
        marginTop: '1em',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexWrap: 'wrap',
        padding: '1em'
    }
}

const images = [
    {
        id: 1,
        url: 'assets/images/murray1.jpg'
    },
    {
        id: 2,
        url: 'assets/images/murray2.jpg'
    },
    {
        id: 3,
        url: 'assets/images/murray3.jpg'
    },
    {
        id: 4,
        url: 'assets/images/murray4.jpg'
    },
    {
        id: 5,
        url: 'assets/images/murray5.jpg'
    }, 
    {
        id: 6,
        url: 'assets/images/murray6.jpg'
    }, 
    {
        id: 7,
        url: 'assets/images/murray7.jpg'
    }, 
    {
        id: 8,
        url: 'assets/images/murray8.jpg'
    }, 
    {
        id: 9,
        url: 'assets/images/murray9.jpg'
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
        images.sort(() => Math.random() - 0.5);
        let highScore = this.state.highScore;
        //Correct Guess
        if (this.state.clicked.indexOf(id) === -1) {
            let currentScore = this.state.score + 1;
            //Check for max
            if (currentScore === images.length) {
                alert('You won!');
                return this.setState({
                    highScore: images.length
                }, function(){
                    this.props.grabScore(4, 0);
                    this.reset();
                })
            }
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