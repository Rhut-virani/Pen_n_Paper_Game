import React, { Component } from 'react';


class Box extends Component {
    render() {
        
        let copy = Array.from(this.props.class);
        //    filter that will compaire this.props.id too index value of this.props.class
    
        let filtercopy = [];
        copy.map((element , index, arr) => {
            if(index === this.props.id){
           filtercopy.push(element);
           filtercopy.push(arr[index+1]);
           filtercopy.push(arr[index+10]);
        } 
       })

        let topButton = (!!filtercopy.length && !filtercopy[0].side1) ? true : false;
        let leftButton = (!!filtercopy.length && !filtercopy[0].side4) ? true : false;
       if (filtercopy[0] !== undefined) {
        if (!filtercopy[0].winnercolor){
            if (!!topButton && !!leftButton && !filtercopy[1].side4 && !filtercopy[2].side1) {
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
                    <div className = 'dot'></div>
                </div>
        );
    }
}
//onclick = ()=>{this.props.handleClicked(this.props.id, 'top')}

//onclick we are sening back to MS index and left/right/top/bottom
//at MS



export default Box;
