import React, { Component } from 'react';

// class Square extends React.Component {
//     constructor(props) {
//         super(props);  //always need to call super when defining constructor
//                        //of a subclass
//       }
//     render() {
//       return (
//           //using arrow function instead of writing function agian and again.Passing the funstion as a onclick prop.
//         <button className="square" onClick={() => this.props.onClick()}> 
//           {this.props.value}
//         </button>
//       );
//     }
//   }

//REPLACING WHOLE CLASS WITH A FUNCTION AS WRITING A CLASS IS TEDIOUS

    function Square(props)
    {
        return(
            <button className="square" onClick={props.onClick}>
                {props.value}
            </button>
        )
    }
    
    class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
          isNext: true, //boolean value which will be flipped everytime a move is made
        };
      }
      handleClick(i) { 
        const squares = this.state.squares.slice();  //slice component to create copy of original arrays for immutability. 
        if (calculateWinner(squares) || squares[i]) //to ignore click if game already won or square is filled
          {
            return;
          } 
        squares[i] = this.state.isNext ?'X' : 'O';
        this.setState({
            squares: squares,
            isNext: !this.state.isNext,
        });
      }
    renderSquare(i)                         //method..
     {                               
      return <Square value={this.state.squares[i]}
                     onClick={() => this.handleClick(i)}/>;
                      //since state of board will be private for itself it
                      //can't be directly used in square.therefore passing a function
    }
  
    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Congratulations ,Winner is: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.isNext ? 'X' : 'O');
        }
    
      return (
        <center>
          <div>
          <div className="status">{status}</div>
          {/* <div>{this.state.xIsNext ? 'X' : 'O'}</div> */}
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div></center>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
          <center>
        <div className="game">
           <Board />
        </div></center>
      );
    }
  }
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  // Square components are controlled components controlled completely by boards component
  
  
  export default Game;
  
