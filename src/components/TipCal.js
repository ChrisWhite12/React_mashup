import React, {Component} from 'react'

class TipCal extends Component {

    constructor(props){
        super(props)
        this.state = {
            subtotal_str: '',
            tip_sel: 2,
            tip_cal: 0,
            total_cal: 0
        }

    }
    handleClick(event) {
        let input_num = event.target.dataset.val
        console.log(input_num)

        this.setState({
            subtotal_str: this.state.subtotal_str+input_num,
            tip_cal: Math.floor((this.state.subtotal_str+input_num) * (this.state.tip_sel/100)*100)/100,
            total_cal: Number(this.state.subtotal_str+input_num) + (Math.floor((this.state.subtotal_str+input_num) * (this.state.tip_sel/100)*100)/100)
        })
    }
    handleTipChange(event){
        const tip_highlight = document.getElementsByClassName("highlight")
        tip_highlight[0].classList.remove("highlight")
        event.target.classList.add("highlight")
        
        this.setState({
            tip_sel: Number(event.target.dataset.val),
            tip_cal: Math.floor((this.state.subtotal_str) * (Number(event.target.dataset.val)/100)*100)/100,
            total_cal: Number(this.state.subtotal_str) + (Math.floor((this.state.subtotal_str) * (Number(event.target.dataset.val)/100)*100)/100)
        })
    }
    handleClear(event){
        this.setState({
            subtotal_str: '',
            tip_cal: 0,
            total_cal: 0
        })
    }

    render(){
        const {subtotal_str, tip_cal, total_cal} = this.state;
        return (
            <div className="App_main">
                <div>
                    <p>Subtotal: $<span id="subtotal_num">{subtotal_str}</span></p>
                    <p>Tip Calulated: $<span id="tip_num">{tip_cal}</span></p>
                    <p>Total: $<span id="total_num">{total_cal}</span></p>
                </div>
                <div>
                    <p className="highlight tip_btn" onClick={(event) => {this.handleTipChange(event)}} data-val="2">2%</p>
                    <p className="tip_btn" onClick={(event) => {this.handleTipChange(event)}} data-val="5">5%</p>
                    <p className="tip_btn" onClick={(event) => {this.handleTipChange(event)}} data-val="10">10%</p>
                </div>
                <div id="cal_grid">
                    <p id="num_0" className="digit" data-val="0" onClick={(event) => {this.handleClick(event)}}>0</p>
                    <p id="num_1" className="digit" data-val="1" onClick={(event) => {this.handleClick(event)}}>1</p>
                    <p id="num_2" className="digit" data-val="2" onClick={(event) => {this.handleClick(event)}}>2</p>
                    <p id="num_3" className="digit" data-val="3" onClick={(event) => {this.handleClick(event)}}>3</p>
                    <p id="num_4" className="digit" data-val="4" onClick={(event) => {this.handleClick(event)}}>4</p>
                    <p id="num_5" className="digit" data-val="5" onClick={(event) => {this.handleClick(event)}}>5</p>
                    <p id="num_6" className="digit" data-val="6" onClick={(event) => {this.handleClick(event)}}>6</p>
                    <p id="num_7" className="digit" data-val="7" onClick={(event) => {this.handleClick(event)}}>7</p>
                    <p id="num_8" className="digit" data-val="8" onClick={(event) => {this.handleClick(event)}}>8</p>
                    <p id="num_9" className="digit" data-val="9" onClick={(event) => {this.handleClick(event)}}>9</p>
                    <p id="clr_btn" onClick={(event) => {this.handleClear(event)}}>CLR</p>
                </div>
            </div>
        )
    }
    
}





export default TipCal