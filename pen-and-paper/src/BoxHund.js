import React, { Component } from 'react';


class BoxHund extends Component {
    render() {
       let copy = Array.from(this.props.class);

    //filter that will compaire this.props.id too index value of this.props.class
        let filtercopy = []
        copy.map((element , index, arr) => {
            if(index === this.props.id){
           filtercopy.push(element);
        } 
       })
       let topButton = (!!filtercopy.length && !filtercopy[0].side1) ? true : '';
       let rightButton = (!!filtercopy.length && !filtercopy[0].side2) ? true : '';
       let bottomButton = (!!filtercopy.length && !filtercopy[0].side3) ? true : '';
       let leftButton = (!!filtercopy.length && !filtercopy[0].side4) ? true : '';

       if (filtercopy[0] !== undefined) {
        if (!filtercopy[0].winnercolor){
            if (!!topButton && !!leftButton && !!bottomButton && !!rightButton) {
                this.props.winnerfunction(this.props.id)
            }
        }
    }
    let boxcolor = ' ' 
        if(!filtercopy[0]){
            boxcolor =  ' '; 
            }   
        else{
            if(filtercopy[0].winnercolor){
                boxcolor =  " bx" + filtercopy[0].winnercolor + ' animated zoomIn';
            }
            else{
                boxcolor =  ' '
            }
        }
    let border = !!filtercopy.length ? filtercopy[0].class + boxcolor : '';
       return (
                <div className = {border} >
                    <button className='top-button' onClick = {()=>{this.props.turn(this.props.id, 'btc')}} disabled={topButton}></button>
                    <button className= 'left-button rotate-button' onClick = {()=>{this.props.turn(this.props.id, 'blc')}} disabled={leftButton}></button>
                    <button className= 'right-button rotate-button' onClick = {()=>{this.props.turn(this.props.id, 'brc')}} disabled={rightButton}></button>
                    <button className= 'bottom-button' onClick = {()=>{this.props.turn(this.props.id, 'bbc')}} disabled={bottomButton}></button>
                    <div className = 'dot'></div>                    
                    <div className = 'dotRight'></div> 
                    <div className = 'dotBottom'></div> 
                    <div className = 'dotHund'></div>  
                </div>
        );
    }
}



export default BoxHund;