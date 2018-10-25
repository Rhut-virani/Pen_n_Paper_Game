import React, { Component } from 'react';
import './App.css';
import BoxGrid from './BoxGrid';
import Countdown from 'react-countdown-now';
const axios = require('axios');

let baseUrl = window.location.hostname.includes('localhost') ? ("http://localhost:8080") : '';


class App extends Component {
  //creat state that starts with a counter of 1
  constructor(){
    super()
    this.state = ({
      currentplayer: localStorage.getItem('player1'),
      player2c: localStorage.getItem('player2'),
      player1c: localStorage.getItem('player1'),
      instructionread: localStorage.getItem('instructions'),
      date : Date.now() + 31000,
      box: [
        {
          class: ''
        }
      ]
    })
  }
  // onClick will add 1 to counter every time line button is clicked
  turn=(id, side)=>{
    // let play = this.state.player.counter+1;
    //map
    //copy will map for index and match with index inside of state
    //in that box will contatinate class name and side
    let copy = Array.from(this.state.box);
    let newcopy = copy.map((element, index)=>{
        if(index === id) {
          console.log(this.state.currentplayer);
          element.class = element.class + side + this.state.currentplayer + ' ';
              if(element.side1 === side){
                element.side1 = false;
              }
              else if(element.side2 === side){
                element.side2 = false;
              }
              else if(element.side3 === side){
                element.side3 = false;
              }
              else if(element.side4 === side){
                element.side4 = false;
              }
          }
          return element;
    })
    this.setState({
      box: newcopy,
      currentplayer : this.state.currentplayer===this.state.player2c ? this.state.player1c : this.state.player2c,
      previousplayer : this.state.previousplayer===this.state.player1c ? this.state.player2c : this.state.player1c,
      date : Date.now() + 31000,
    })
  }
  //function if current counter is either Even or Odd, players choosen color will be that border color
  componentDidMount(){
    let url = baseUrl + '/boxdata';
    axios.get(url)
    // axios.get('http://localhost:8080/')
         .then(results =>{
          //  console.log(results.data);
            this.setState({
              box: results.data,
            })
           console.log(results.data);
            
         })
         .catch(error =>{
           console.log(error);
         })
    console.log(this.state.box);     
  }
  // function will set the value that players selected to local strage so that
  // and also resets it to state so the page rerenders
  submit = (e) => {
    e.preventDefault();
    localStorage.setItem('player1', this.refs.value1.value);
    localStorage.setItem('player2', this.refs.value2.value);
    this.setState({
      currentplayer: localStorage.getItem('player1'),
      player2c: localStorage.getItem('player2'),
      player1c: localStorage.getItem('player1'),
      date : Date.now() + 31000,
    })
  }
  // to make sure the user understands the game and winning 
  read = (e) =>{
    console.log("read button hit")
    e.preventDefault();
    localStorage.setItem('instructions', "read");
    this.setState({
      instructionread: localStorage.getItem('instructions'),
      date : Date.now() + 31000,
    })
  }
  // function will allow player to manually reset the game and clear all the clicks 
  // also it resets the local storage so users can select new colors 
  resetGame = ()=>{
    localStorage.removeItem('player1');
    localStorage.removeItem('player2');
    localStorage.removeItem('instructions');
    this.setState({
      player: this.state.player,
    })
    window.location.reload(); 
  }
  winnerfunction=(id)=>{
    let copy = Array.from(this.state.box);
    let newcopy = copy.map((element, index)=>{
        if(index === id) {
          element.winnercolor = !!(element.winnercolor === '')? this.state.previousplayer : element.winnercolor;
        }
        return element;
      })
      this.setState({
        box: newcopy
      })
  }
  onTick = (time) =>{
    if(time<2){
    this.setState({
      currentplayer : this.state.currentplayer===this.state.player2c ? this.state.player1c : this.state.player2c,
      previousplayer : this.state.previousplayer===this.state.player1c ? this.state.player2c : this.state.player1c,
      date : Date.now() + 31000,
    })
  }
  }
  
  render() {
  // checking if the players have selected the colors or not
  // if yes checking again that both selected colors are not same
        if(!localStorage.getItem('player1') && !localStorage.getItem('player2') || (localStorage.getItem('player1') === localStorage.getItem('player2'))){
        (localStorage.getItem('player1') !== null) ? window.alert("Please Select different color for each player") : console.log('it owrked') ;
        return (
            <div className="form-div animated rubberBand">
                <div className="portraitonly">
                    <h1 className="portraith1">Please Set The Device In Landscape Mode</h1>
                </div>
                <h1 className="hide">Select the Color of Choice For Each Player</h1>
                <form onSubmit = {this.submit} className="hide">
                  <div>
                        <select ref='value1' className="custom-select selection1">
                            <option value="1" >Rose</option>
                            <option value="2" >Picton Blue</option>
                            <option value="3" >Malachite Green</option>
                            <option value="4" >Electric Violet</option>
                            <option value="5" >Ripe Lemon</option>
                            <option value="6" >Razzle Dazzle Pink</option>
                        </select>
                        <select ref='value2' className="custom-select selection2">
                            <option value="1" >Rose</option>
                            <option value="2" >Picton Blue</option>
                            <option value="3" >Malachite Green</option>
                            <option value="4" >Electric Violet</option>
                            <option value="5" >Ripe Lemon</option>
                            <option value="6" >Razzle Dazzle Pink</option>
                        </select>
                </div>
                  <button className="btn btn-dark playbutton" type="submit">Play</button>
                </form>
            </div>
        )
        }
        else if(!localStorage.getItem('instructions')){
          return(
          <div className="winningonly">
            <h1 className="portraith1">Please Set The Device In Landscape Mode</h1>
            <h1 className="instructionsh1 animated fadeIn hide">Join the dots by clicking between 2 dots. <br/> <br/> Player to close the sqaure on its chance gets the square and 1 point.<br/><br/>Player to score 25 first wins the game<br/></h1>
            <form onSubmit = {this.read} className="hide animated fadeIn">
              <button className="btn btn-dark playbutton" type="submit">Play</button>
            </form>
          </div>
          )
        }
        else{
        let copy = Array.from(this.state.box);
        let player1score = 0;
        let player2score = 0;
        var player = " ";
        copy.map(element=>{
          if(element.winnercolor === this.state.player1c){
            player1score += 1  ; 
          }
          else if(element.winnercolor === this.state.player2c){
            player2score += 1;
          }
        })
        let score1 = 'scoreboard' + this.state.player1c;
        let score2 = 'scoreboard' + this.state.player2c;
        let timer = 'timer' + this.state.currentplayer;
        if(player1score === 25 || player2score === 25){
          if(player1score === 25){
            player = "Player 1"
          }
          else{
            player = "Player 2"
          }
          return(
            <div className="winningonly">
              <div className="reset-button hide">
                <button className="device-change-button  btn btn-success" onClick={this.resetGame}>Reset Game</button>
              </div>
              <h1 className="winningh1 animated zoomInDown">{player} has Won the game</h1>
              <h1 className="portraith1">Please Set The Device In Landscape Mode</h1>
            </div>
          )
        }
        else{
        return (
          <div className= 'animated slideInLeft'>
            <div className="portraitonly">
                <h1 className="portraith1">Please Set The Device In Landscape Mode</h1>
            </div>
            <div className="container shadow-lg rounded hide">
              <BoxGrid turn = {this.turn} class={this.state.box} current={this.state.currentplayer} winnerfunction={this.winnerfunction}/>
            </div>
            <div className="reset-button hide">
                <button className="device-change-button  btn btn-success" onClick={this.resetGame}>Reset Game</button>
            </div>
            <div className= 'scoreboardMain hide'>
            <div className={score1}>
              <h3>{player1score}</h3>
            </div>
            <div className={score2}>
              <h3>{player2score}</h3>
            </div>
          </div>
          <div className= 'timer hide'>
            <div className= {timer}>
              <h3>  <Countdown
                          date={this.state.date}
                          intervalDelay={0}
                          renderer={props => <div>{props.total/1000-1}</div>}
                          onTick={(props)=>{this.onTick(props.total/1000)}}
                        />
              </h3>
            </div>
          </div>
        </div>
          );
      }
    }
}
}

export default App;


